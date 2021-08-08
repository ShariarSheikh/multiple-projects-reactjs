import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  console.log(showProfile);
  return (
    <header className="sticky top-0 flex justify-between py-8 px-8 md:px-16 bg-white z-50">
      {/* left  */}
      <div className="flex items-center justify-start">
        <h1 className="hidden md:inline-block text-2xl text-blue-500 font-bold cursor-pointer">
          Multiple Projects Example |
        </h1>
        <h3 className="text-2xl font-bold cursor-pointer">Dev.S</h3>
      </div>
      {/* right */}
      <div className="relative flex items-center justify-end space-x-4">
        <a href="https://github.com/ShariarSheikh">
          <AiFillGithub className="w-9 h-9" />
        </a>
        <div
          className="flex justify-center items-center cursor-pointer space-x-2"
          onClick={() => setShowProfile((prevState) => !prevState)}
        >
          <img
            className="object-cover w-9 h-9 rounded-full border-2 border-blue-500"
            src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=6&m=1226886130&s=170667a&w=0&h=9VyVuQvQfzzQaYB1iEfy-p5YaEe59lzeIe3BfkTOnBE="
            alt="person profile"
          />
          <RiArrowDownSFill
            className={`w-6 h-6 text-blue-500 cursor-pointer transition duration-150 ease-out ${
              showProfile ? "transform rotate-180" : "transform rotate-0"
            }`}
          />
        </div>
        {/* profile drop down menu  */}
        <div
          className={`absolute top-10 shadow-xl ${
            showProfile ? "inline-block" : "hidden"
          } w-52 py-5 px-4 z-50 bg-white`}
        >
          <p className="cursor-pointer hover:text-blue-500 text-gray-600 text-sm font-semibold mb-2">
            Profile
          </p>
          <p className="cursor-pointer hover:text-blue-500 text-gray-600 text-sm font-semibold mb-2">
            Login
          </p>
          <p className="cursor-pointer hover:text-blue-500 text-gray-600 text-sm font-semibold mb-2">
            Sign Up
          </p>
          <div className="h-1 w-full bg-gray-400 my-5" />
          <p className="cursor-pointer hover:text-blue-500 text-gray-600 text-sm font-semibold">
            Logout
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
