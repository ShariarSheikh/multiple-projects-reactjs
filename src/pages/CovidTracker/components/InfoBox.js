const InfoBox = ({ title, cases, total }) => {
  return (
    <div className="w-52 lg:w-60 py-5 px-6 shadow-2xl text-gray-50 mx-3 border border-gray-500 rounded-md hover:shadow-none">
      <p className="text-xm text-gray-300">{title}</p>
      <h3 className="text-xl font-bold py-3">{cases}</h3>
      <p className="text-sm text-gray-300">{total} Total</p>
    </div>
  );
};

export default InfoBox;
