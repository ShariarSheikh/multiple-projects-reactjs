import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const projectListName = [
  {
    id: 1,
    name: "Todos",
    link: "/",
  },
  {
    id: 2,
    name: "Covid-Tracker",
    link: "/covid-tracker",
  },
  {
    id: 3,
    name: "Shopping-Cart",
    link: "/shopping-cart",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between h-20 py-8 px-8 md:px-16 z-50 header-bg border-b border-gray-600">
      {/* left  */}

      <Link to="/" className="flex items-center justify-start">
        <h1 className="hidden md:inline-block text-2xl text-white font-bold cursor-pointer">
          Example |
        </h1>
        <h3 className="text-2xl font-bold cursor-pointer text-gray-50">
          Dev.S
        </h3>
      </Link>

      {/* middle */}
      <div className="relative h-full flex items-center space-x-3">
        {projectListName.map(({ id, name, link }) => (
          <Link key={id} to={link} className="text-sm font-bold text-white">
            {name}
          </Link>
        ))}
      </div>

      {/* right */}
      <div className="relative flex items-center justify-end space-x-4">
        <a href="https://github.com/ShariarSheikh">
          <AiFillGithub className="w-9 h-9 text-white" />
        </a>
        <a
          href="https://shariar.vercel.app/"
          className="flex justify-center items-center cursor-pointer space-x-2"
        >
          <img
            className="object-cover w-9 h-9 rounded-full border-2 border-blue-500"
            src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=6&m=1226886130&s=170667a&w=0&h=9VyVuQvQfzzQaYB1iEfy-p5YaEe59lzeIe3BfkTOnBE="
            alt="person profile"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
