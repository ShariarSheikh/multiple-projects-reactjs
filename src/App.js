import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="px-16">
          <Switch>
            <h1>hwl</h1>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
