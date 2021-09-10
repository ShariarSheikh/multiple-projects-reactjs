const EcApiForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-2xl w-full m-auto text-gray-200"
    >
      <label htmlFor="Select Categories">Select Categories</label>
      <select className="w-full mb-5 p-2 bg-gray-600">
        <option value="abc">abc</option>
        <option value="abc">abc</option>
        <option value="abc">abc</option>
        <option value="abc">abc</option>
      </select>

      {/* input list */}
      <div>
        <label htmlFor="api name">Api Name</label>
        <input
          className="w-full mb-3 p-2 bg-gray-600 outline-none"
          type="text"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 cursor-pointer text-center w-full mt-7"
      >
        Create
      </button>
    </form>
  );
};

export default EcApiForm;
