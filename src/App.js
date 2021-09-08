import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ChatApp from "./pages/ChatApp/Index";
import CovidTracker from "./pages/CovidTracker/Index";
import ShoppingCart from "./pages/ShoppingCart/Index";
import Todos from "./pages/Todos/Index";

function App() {
  return (
    <main>
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
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default App;
