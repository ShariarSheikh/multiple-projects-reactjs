import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import ProductsFeed from "./components/ProductsFeed";

const cartData = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81KbZuKUaVL._AC_SX355_.jpg",
    price: 19.0,
    title: "Hp Laptop",
    stock:10,
    description: `
    It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as opposed to using 'Content here, content here',`,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX425_.jpg",
    price: 20.0,
    title: "mart speaker with Alexa",
    stock:7,
    description: `
    It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of 
     using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here',`,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71OfQF3QUNL._AC_SX466_.jpg",
    price: 10.0,
    title: "Video Camera",
    stock:15,
    description: `
    It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of using
     Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here',`,
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/41YZ7JNEqdL.jpg",
    price: 31.0,
    title: "Gaming GeForce",
    stock:6,
    description: `
    It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of 
    using Lorem Ipsum is that it has a more-or-less normal distribution of
     letters, as opposed to using 'Content here, content here',`,
  },
];

const ShoppingCart = () => {
  const { url, path } = useRouteMatch();
  return (
    <main className="w-full overflow-hidden min-h-screen bg-white">
      <section className="relative max-w-screen-lg m-auto">
        <Header />
        {/* products feed */}
        <Switch>
          <div>
            <Route exact path={`${url}/`}>
              <ProductsFeed cartData={cartData} />
            </Route>
            <Route path={`${url}/details/:id`}>
              <Details cartData={cartData} />
            </Route>
          </div>
        </Switch>
      </section>
    </main>
  );
};

export default ShoppingCart;
