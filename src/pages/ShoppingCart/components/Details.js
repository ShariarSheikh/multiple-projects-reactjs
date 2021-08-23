import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = ({ cartData }) => {
  const [item, setItem] = useState({});
  const [countItem, setCountItem] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const findItem = cartData.find((item) => item.id == id);
    setItem(findItem);
  }, [id]);

  const increment = () => {
    setCountItem((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCountItem((prevState) => prevState - 1);
  };

  const selectCount = (e) => {
    const value = e.target.value;
    setCountItem((prevState) => value);
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
            <div className="flex items-center border border-gray-300 h-10 px-4 justify-between">
              <div
                onClick={decrement}
                className="h-full flex items-center cursor-pointer text-2xl mr-6"
              >
                -
              </div>
              <div className="w-10 h-full flex justify-center items-center">
                <select
                  value={countItem}
                  onChange={selectCount}
                  className="w-full outline-none border-none cart-select-arrow cursor-pointer"
                >
                  {}
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div
                onClick={increment}
                className="h-full flex items-center cursor-pointer text-2xl ml-1"
              >
                +
              </div>
            </div>
            <div className=" h-10 flex items-center px-4 bg-black text-white rounded-md cursor-pointer">
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
