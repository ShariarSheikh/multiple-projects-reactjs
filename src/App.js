import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CovidTracker from "./pages/CovidTracker/CovidTracker";
import { selectCodeShow } from "./redux/openCode/openCode";
//pages import
import Todos from "./pages/Todos/Todos";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import FirstLoadingScreen from "./components/FirstLoadingScreen/FirstLoadingScreen";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  }, []);
  return (
    <main>
      <Header />
      {spinner && <FirstLoadingScreen />}
      <div className="main-app relative flex px-4">
        {/* dynamic rendering components */}
        <div className="w-full">
          <Switch>
            <Route exact path="/">
              <Todos />
            </Route>
            <Route path="/covid-tracker">
              <CovidTracker />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default App;
