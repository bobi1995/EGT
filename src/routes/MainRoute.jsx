import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../components/history";
import Footer from "../components/Footer";
//Screens
import HomeScreen from "../screens/HomeScreen";
import BuildingsScreen from "../screens/BuildingsScreen";

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomeScreen} exact />
        <Route path="/buildings" component={BuildingsScreen} />
      </Switch>
      {/* Putting Footer component here just to be in the Router component. Otherwise Link from react-router-dom will not work. 
      I prefer to use Link from react-router-dom than Link from material-ui or <a> because with react-router-dom Link application will act as SPA.*/}
      <Footer />
    </Router>
  );
};

export default MainRoute;
