const Item = ({ id, img, title, price }) => {
  return (
    <div
      key={id}
      className="w-80  py-5 shadow-md mb-4 mr-4 cursor-pointer group hover:shadow"
    >
      <div className="relative w-44 m-auto h-80">
        <img
          className="w-full h-full object-contain"
          src={img}
          alt="product img"
        />
      </div>
      <div className="flex w-full items-center justify-between px-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <h2 className="text-xl font-semibold text-gray-600">
          $:<span className="text-gray-600">{price}</span>
        </h2>
      </div>
    </div>
  );
};

export default Item;
