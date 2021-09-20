import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../../../redux/shoppingCart/cartSlice";
import Item from "./Item";

const ProductsFeed = ({ loading, error, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (loading) {
    return (
      <div className="text-black text-2xl w-full mt-60 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-black text-2xl w-full mt-60 flex items-center justify-center">
        {error}
      </div>
    );
  }

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/shopping-cart/cart");
  };
  return (
    <div className="w-full flex flex-row mt-12 flex-wrap">
      {data?.slice(0, 6).map((pd) => (
        <Item key={pd.id} data={pd} handleToCart={handleToCart} />
      ))}
    </div>
  );
};

export default ProductsFeed;
