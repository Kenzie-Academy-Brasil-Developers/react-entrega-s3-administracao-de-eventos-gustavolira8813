import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Casamento from "../pages/casamento";
import Confra from "../pages/confra";
import Formatura from "../pages/formatura";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/casamento">
        <Casamento />
      </Route>
      <Route exact path="/confra">
        <Confra />
      </Route>
      <Route exact path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
