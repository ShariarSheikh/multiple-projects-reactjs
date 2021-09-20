const Item = ({ data, handleToCart }) => {

  return (
    <div
      key={data.id}
      className="relative w-80 pt-5 shadow-md mb-4 mr-4 group hover:shadow"
    >
      <div className="relative w-44 m-auto h-60">
        <img
          className="w-full h-full object-contain"
          src={data.image}
          alt="product img"
        />
      </div>
      <div className="w-full px-2 pt-2">
        <h2 className="font-semibold text-gray-800 line-clamp-1">
          {data.title}
        </h2>
        <div className="w-full flex justify-between items-center py-2">
          <div className="text-gray-600">{data.price}</div>
          <div
            className="bg-black text-white w-32 flex items-center
             transform transition duration-200 active:scale-105 ease-out
              justify-center h-10 rounded-md cursor-pointer"
            onClick={() => handleToCart(data)}
          >
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
