import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Header = () => {
  const router = useHistory();
  return (
    <header className="relative w-full h-14 flex items-center justify-between border-b border-gray-400 px-6 lg:px-0">
      <div
        className="text-gray-700 text-xl font-semibold cursor-pointer"
        onClick={() => router.push("/shopping-cart")}
      >
        Shopping Cart
      </div>
      <div className="relative h-full flex items-center">
        <AiOutlineShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer" />
        <div className="absolute top-2 left-3 h-5 w-5 rounded-full bg-red-600 flex items-center justify-center">
          <p className="text-xm text-white">5</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
