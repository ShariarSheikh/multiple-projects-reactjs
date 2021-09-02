import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../../../redux/addToCart/addToCart";

const Details = ({ cartData }) => {
  const [item, setItem] = useState({});
  const [countItem, setCountItem] = useState(1);
  //..
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    const findItem = cartData.find((item) => item.id == id);
    setItem(findItem);
  }, [id]);

  const increment = () => {
    setCountItem(parseInt(countItem) + 1);
  };
  const decrement = () => {
    if (countItem <= 1) {
      setCountItem(1);
    } else {
      setCountItem(parseInt(countItem) - 1);
    }
  };

  const selectCount = (e) => {
    const count = e.target.value;
    setCountItem(count);
  };

  //add to cart
  const addHandler = (id) => {
    const product = {
      id: id,
      quantity: parseInt(countItem),
    };
    dispatch(addProduct(product));
  };

  return (
    <main className="w-full">
      <section className="w-full relative flex flex-col items-center md:flex-row mt-4 mb-10 md:mb-0">
        {/* img container  */}
        <div className="w-11/12 md:w-6/12 flex">
          <div className="w-1/5 h-auto overflow-hidden">
            <ProductImages img={item.img} />
            <ProductImages img={item.img} />
            <ProductImages img={item.img} />
            <ProductImages img={item.img} />
          </div>
          <div className="w-4/5 h-80 p-8">
            <img
              className="w-full relative h-full object-contain"
              src={item.img}
              alt="product"
            />
          </div>
        </div>
        {/* information container */}
        <div className="w-11/12 md:w-6/12">
          <h1 className="py-2 text-2xl font-semibold">{item.title}</h1>
          <p className="text-xl text-gray-600 font-semibold">$:{item.price}</p>
          <p className="text-sm text-gray-700 mt-2">
            Stock: <b>{item.stock}</b>
          </p>
          {/* add btn */}
          <div className="w-full flex space-x-7 mt-8">
            {/* increment and decrement component */}
            <IncrementDecrement
              stock={item.stock}
              increment={increment}
              decrement={decrement}
              countItem={countItem}
              selectCount={selectCount}
            />
            <div
              onClick={() => addHandler(item.id)}
              className=" h-10 flex items-center px-4 bg-black text-white rounded-md cursor-pointer"
            >
              Add To Cart
            </div>
          </div>
          <div className="mt-10">
            <p className="text-xl font-bold">
              Details:
              <span className="font-semibold"> {item.description}</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;

//images list components
const ProductImages = ({ img }) => {
  return (
    <div className="w-full h-16 border border-gray-200 overflow-hidden">
      <img
        src={img}
        alt="product"
        className="w-full h-full object-contain cursor-pointer p-3"
      />
    </div>
  );
};

//increment and decrement component
const IncrementDecrement = ({
  stock,
  increment,
  decrement,
  countItem,
  selectCount,
}) => {
  const [stockCount, setStockCount] = useState([]);

  useEffect(() => {
    // create stock item length to array
    if (stock >= 10) {
      const stockLength = 11;
      let stockArray = Array.from({ length: parseInt(stockLength) }).map(
        (currentElement, i) => i
      );
      stockArray.shift();
      setStockCount(stockArray);
    }
    if (stock <= 10) {
      const stockLength = stock + 1;
      let stockArray = Array.from({ length: parseInt(stockLength) }).map(
        (currentElement, i) => i
      );
      stockArray.shift();
      setStockCount(stockArray);
    }
  }, [stock]);

  return (
    <div className="flex items-center border border-gray-300 h-10 justify-between">
      <div
        onClick={decrement}
        className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
      >
        -
      </div>
      <div className="relative w-10 h-full flex justify-center items-center">
        <div className="absolute">{countItem}</div>
        <select
          value={countItem}
          onChange={selectCount}
          className="opacity-0 w-full h-full outline-none border-none cart-select-arrow cursor-pointer"
        >
          {stockCount.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div
        onClick={increment}
        className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
      >
        +
      </div>
    </div>
  );
};
