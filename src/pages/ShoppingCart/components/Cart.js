import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../redux/addToCart/addToCart";

const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData = useSelector(selectCart);

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  return (
    <div className="w-full relative mt-8">
      <h1 className="text-2xl">Shopping Cart</h1>
      <p className="text-gray-600 text-sm">Total Items {totalItems}</p>
      <div className="flex flex-row w-full mt-8">
        {/* cart list */}
        <div className="w-2/3 cart-height">
          {cartData.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              img={item.img}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
            />
          ))}
        </div>
        {/* process cart order */}
        <div className="pl-4 w-1/3 ">
          <p className="mb-3">
            Total Cost: <strong>${totalPrice}</strong>
          </p>
          <button className="bg-black text-gray-50 cursor-pointer rounded-md h-10 w-full">
            Process Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({ id, img, price, title, quantity }) => {
  const [countQuantity, setCountQuantity] = useState(quantity);
  const dispatch = useDispatch();

  //increment quantity of items
  const increment = (id) => {
    setCountQuantity(countQuantity + 1);
    // update state
  };
  //decrement quantity of items
  const decrement = () => {
    if (countQuantity <= 1) {
    } else {
      setCountQuantity(countQuantity - 1);
    }
  };
  //delete items from cat
  const deleteHandler = (id) => {};
  return (
    <div
      className="w-full h-24 border-b border-gray-300
      flex items-center justify-between px-3 font-semibold"
    >
      {/* img */}
      <div>
        <img className="object-contain w-28" src={img} alt="product" />
      </div>
      {/* name */}
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <div className="flex items-center border border-gray-300 h-10 justify-between">
          <div
            onClick={() => decrement(id, countQuantity)}
            className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
          >
            -
          </div>
          <div className="relative w-10 h-full flex justify-center items-center">
            <div className="absolute">{countQuantity}</div>
          </div>
          <div
            onClick={() => increment(id, countQuantity)}
            className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
          >
            +
          </div>
        </div>
      </div>
      <div>
        $<strong>{price}</strong>
      </div>
      <div>
        <AiOutlineDelete
          className="h-6 w-6 cursor-pointer text-red-600"
          onClick={() => deleteHandler(id)}
        />
      </div>
    </div>
  );
};
