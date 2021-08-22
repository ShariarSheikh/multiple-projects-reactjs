import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ShowCode from "./components/ShowCode/ShowCode";
import CovidTracker from "./pages/CovidTracker/CovidTracker";
import { selectCodeShow } from "./redux/openCode/openCode";
//pages import
import Todos from "./pages/Todos/Todos";


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
            </Switch>
          </div>
        </div>
        <div className={`h-screen ${isOpenCode ? "w-full": "w-0"} bg-gray-900 fixed right-0 top-36 z-50`}>
          <ShowCode/>
        </div>
        
      </Router>
    </>
  );
}

export default App;

