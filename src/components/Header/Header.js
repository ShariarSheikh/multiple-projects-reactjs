import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginHandler } from "../../redux/loginOpen/loginOpen";

const projectListName = [
  {
    id: 1,
    name: "Covid-Tracker",
    link: "/",
  },
  {
    id: 2,
    name: "Chat App",
    link: "/chat",
  },
  {
    id: 3,
    name: "Shopping-Cart",
    link: "/shopping-cart",
  },
  {
    id: 4,
    name: "Todos",
    link: "/todo",
  },
];

const Header = () => {
  const [openComponent, setOpenComponent] = useState(false);
  const dispatch = useDispatch();
  const router = useHistory();

  //login
  const login = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    token && router.push("/admin");
    !token && dispatch(loginHandler(true));
  };
  //logout
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
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
        <div
          onClick={() => setOpenComponent(!openComponent)}
          className="relative flex justify-center items-center cursor-pointer space-x-2"
        >
          <img
            className="object-cover w-9 h-9 rounded-full border-2 border-blue-500"
            src="https://avatars.githubusercontent.com/u/69359203?s=400&u=1b2da86a40bf442bb66c47040b769d523d8b28f4&v=4"
            alt="person profile"
          />
          {openComponent && <JoinOut login={login} logout={logout} />}
        </div>
      </div>
    </header>
  );
};

export default Header;

const JoinOut = ({ login, logout }) => {
  const router = useHistory();
  return (
    <div className="absolute top-12 right-1 bg-white p-3 ">
      {localStorage.getItem("token") ? (
        <button onClick={() => router.push("/admin")}>Profile</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
      {localStorage.getItem("token") && (
        <button onClick={() => logout()}>Logout</button>
      )}
    </div>
  );
};
