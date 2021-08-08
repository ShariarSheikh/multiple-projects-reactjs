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
        <div className="relative flex px-16">
          {/* home page left sidebar  */}
          <Sidebar />
          {/* dynamic rendering components */}
          <div  className="w-full flex justify-start flex-grow">
            <Switch>
              <Route exact path="/todos">
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
