import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import ChatApp from "./pages/ChatApp/Index";
import CovidTracker from "./pages/CovidTracker/Index";
import ShoppingCart from "./pages/ShoppingCart/Index";
import Todos from "./pages/Todos/Index";
import { loginSelector } from "./redux/loginOpen/loginOpen";

function App() {
  const loginBox = useSelector(loginSelector);
  return (
    <main className="relative">
      <Header />
      {/* {spinner && <FirstLoadingScreen />} */}
      <div className="main-app relative flex px-4">
        {/* dynamic rendering components */}
        <div className="w-full">
          <Switch>
            <Route path="/todo">
              <Todos />
            </Route>
            <Route path="/chat">
              <ChatApp />
            </Route>
            <Route exact path="/">
              <CovidTracker />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
            <PrivateRoute path="/admin" exact={false} component={Admin} />
          </Switch>
        </div>
      </div>
      {loginBox && <Login />}
    </main>
  );
}

export default App;
