import { Link } from "react-router-dom";
import Item from "./Item";

const ProductsFeed = ({ cartData }) => {
  return (
    <div className="w-full flex flex-row mt-12 flex-wrap">
      {cartData.map(({ id, img, title, price }) => (
        <Link to={`/shopping-cart/details/${id}`} key={id}>
          <Item img={img} title={title} price={price} id={id} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsFeed;
