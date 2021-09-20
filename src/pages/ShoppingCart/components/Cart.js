import { useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotals,
  removeFromCart,
} from "../../../redux/shoppingCart/cartSlice";
import { IncDec } from "../../../util";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="w-full relative mt-8">
      <div>
        <h1 className="text-2xl">Shopping Cart</h1>
        <p className="text-gray-600 text-sm">Total Items {cartTotalQuantity}</p>
        {cartTotalQuantity ? (
          <div className="flex flex-row w-full mt-8">
            {/* cart list */}
            <div className="w-2/3 cart-height">
              {<CartItem key={cart.cartItems.id} items={cart.cartItems} />}
              <div className="w-full text-right pr-3 pt-3 ">
                Total:{cart.cartTotalAmount.toFixed(2)}
              </div>
            </div>

            {/* process cart order */}
            <div className="pl-4 w-1/3 ">
              <p className="mb-3">
                Total Cost: <strong>${cart.cartTotalAmount.toFixed(2)}</strong>
              </p>
              <button className="bg-black text-gray-50 cursor-pointer rounded-md h-10 w-full">
                Process Order
              </button>
            </div>
          </div>
        ) : ( <div className="text-center text-xl">0 Items in cart</div> )}
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  //delete items from cat
  const deleteHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-3 py-3  text-left leading-4 text-gray-400 tracking-wider">
            Product Details
          </th>
          <th className="px-3 py-3 text-left text-sm leading-4 text-gray-400 tracking-wider">
            Quantity
          </th>
          <th className="px-3 py-3  text-left text-sm leading-4 text-gray-400 tracking-wider">
            Price
          </th>
          <th className="px-3 py-3  text-left text-sm leading-4 text-gray-400 tracking-wider">
            Total
          </th>
        </tr>
      </thead>
      {items.map((itm) => {
        const totalPrice = itm.price * itm.cartQuantity;
        return (
          <tbody className="bg-transparent" key={itm.id}>
            <tr className="border-t border-gray-300">
              <td className="px-6 py-4 whitespace-no-wrap ">
                <div className="flex items-center space-x-3">
                  <div>
                    <img
                      className="w-16 h-16 object-contain "
                      src={itm.image}
                      alt="country flag"
                    />
                  </div>
                  <div className="text-sm">{itm.title}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap ">
                <div className="text-sm ">
                  <IncDec cartItems={itm} />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap  text-sm leading-5">
                {itm.price}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                <div className="flex item-center">
                  {totalPrice.toFixed(2)}
                  <div>
                    <VscClose
                      className="h-6 w-6 cursor-pointer ml-3 text-black"
                      onClick={() => deleteHandler(itm)}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
