import "./App.css";
import Home from "./Components/Home";
import DefaultContainer from "./Containers/DefaultContainer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route component={DefaultContainer} />
      </Switch>
    </div>
  );
}

export default App;
