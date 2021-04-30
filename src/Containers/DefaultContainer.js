import Navbar from "../Components/Navbar";
import BeverageContainer from "./BeverageContainer";
import BakeryContainer from "./BakeryContainer";
import AboutContainer from "./AboutContainer";
import { Route, Switch} from "react-router-dom";

function DefaultContainer() {
  return (
    <div className="background">
      <Navbar />
      <Switch><Route path="/bakery" render={() => <BakeryContainer />} />
        <Route path="/beverages" render={() => <BeverageContainer />} />
        <Route path="/about" render={() => <AboutContainer />} />
      </Switch>
    </div>
  );
}

export default DefaultContainer;
