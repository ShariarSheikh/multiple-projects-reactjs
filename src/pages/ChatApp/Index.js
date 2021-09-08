import { Route, Switch, useRouteMatch } from "react-router";
import Join from "./components/Join";

const Index = () => {
  const { url } = useRouteMatch();
  return (
    <main className="w-full min-h-screen bg-gray-900 text-gray-200 md:px-12 mt-5">
      <h1 className="text-2xl font-bold text-center text-gray-400 pt-5">
        RealTime Chat App
      </h1>
      <Switch>
        <div>
          <Route exact path={`${url}/`}>
            <Join />
          </Route>
        </div>
      </Switch>
    </main>
  );
};

export default Index;
