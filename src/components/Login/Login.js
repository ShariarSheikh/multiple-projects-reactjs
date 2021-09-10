import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginHandler } from "../../redux/loginOpen/loginOpen";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const router = useHistory();
  const closeLogin = () => {
    dispatch(loginHandler(false));
  };

  // login
  const login = (e) => {
    setDisable(true);
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };
    fetch(`${process.env.REACT_APP_VERCEL_ADMIN_URL}/api/auth/admin`, config)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "token",
          JSON.stringify(data.success && data.token)
        );
        data.success && router.replace({ pathname: "/admin" });
        data.success && dispatch(loginHandler(false));
        setEmail("");
        setPassword("");
        setDisable(false);
      })
      .catch((err) => {
        setError(err.message);
        setDisable(false);
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen flex items-center justify-center bg-transparent">
      <form
        onSubmit={login}
        className="relative flex flex-col space-y-5 bg-gray-900 w-80 p-4 pb-9"
      >
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="absolute top-2 right-0 p-3">
          <AiOutlineClose
            className="text-white cursor-pointer w-6 h-6"
            onClick={closeLogin}
          />
        </div>
        <h1 className="text-white">Login</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="p-2"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-2"
          required
        />
        <button
          disabled={disable ? true : false}
          type="submit"
          className="px-3 pt-2 text-white shadow-md bg-gray-400 pb-2 disabled:opacity-50
          transform transition duration-200 active:scale-105 ease-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
