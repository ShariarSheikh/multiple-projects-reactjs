import { Route, Switch, useRouteMatch } from "react-router-dom";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Header from "./components/Header";
import ProductsFeed from "./components/ProductsFeed";
import { cartData } from "./components/cartData";

const Index = () => {
  const { url } = useRouteMatch();
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
              <Details />
            </Route>
            <Route path={`${url}/cart`}>
              <Cart />
            </Route>
          </div>
        </Switch>
      </section>
    </main>
  );
};

export default Index;
