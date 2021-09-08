import { useState } from "react";

const btn = [
  {
    id: 1,
    name: "Google",
  },
  {
    id: 2,
    name: "Facebook",
  },
];

const Join = () => {
  const [disable, setDisable] = useState(false);

  const loginHandler = (btn) => {
    setDisable(true);
    setInterval(() => {
      setDisable(false);
    }, 3000);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-36">
      <h1 className="text-xl">Join</h1>
      <div className="mt-5 flex flex-col space-y-4">
        {btn.map(({ id, name }) => (
          <button
            key={id}
            className={` w-72 h-10 rounded-md outline-none border-none disabled:opacity-50
                      transform transition duration-200 active:scale-105 ease-out
                      ${name === "Google" ? "bg-green-500" : "bg-blue-600"}`}
            onClick={() => loginHandler(name)}
            disabled={disable ? true : false}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Join;
