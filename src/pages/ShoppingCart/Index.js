import { Route, Switch, useRouteMatch } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsFeed from "./components/ProductsFeed";

const Index = () => {
  const { loading, error, data } = useFetch(
    `https://fakestoreapi.com/products`
  );
  const { url } = useRouteMatch();


  


  return (
    <main className="w-full overflow-hidden min-h-screen bg-white">
      <section className="relative max-w-screen-lg m-auto">
        <Header />
        {/* products feed */}
        <div>
          <Switch>
            <Route exact path={`${url}/`}>
              <ProductsFeed loading={loading} error={error} data={data} />
            </Route>
            <Route path={`${url}/cart`}>
              <Cart />
            </Route>
          </Switch>
        </div>
      </section>
    </main>
  );
};

export default Index;
