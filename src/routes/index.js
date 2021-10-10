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
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/confra">
        <Confra />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
