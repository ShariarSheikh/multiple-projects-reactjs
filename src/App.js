import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CovidTracker from "./pages/CovidTracker/CovidTracker";
import { selectCodeShow } from "./redux/openCode/openCode";
//pages import
import Todos from "./pages/Todos/Todos";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";


function App() {
    const isOpenCode = useSelector(selectCodeShow);
  return (
    <>
      <Router>
        <Header />
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
                <ShoppingCart/>
              </Route>
            </Switch>
          </div>
        </div>
        
      </Router>
    </>
  );
}

export default App;

