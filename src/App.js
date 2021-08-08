import { IoIosMenu } from "react-icons/io";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CovidTracker from "./pages/CovidTracker/CovidTracker";

//pages import
import Todos from "./pages/Todos/Todos";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="relative flex md:px-16 px-8">
          {/* home page left sidebar  */}
          <Sidebar />
          {/* dynamic rendering components */}
          <div className="w-full pl-10">
            <Switch>
              <Route exact path="/">
                <FirstScreen />
              </Route>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/covid-tracker">
                <CovidTracker />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

const FirstScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-4 pt-10">Explore My Website</h1>
      <p className="text-xl text-blue-500">
        You can use this code in your site
      </p>
    </div>
  );
};
