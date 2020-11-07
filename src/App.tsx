import React from "react";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products-list/Products";

import s from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className={s.navigation}>
          <SideBar />
        </div>
        <div className={s.main_container}>
          <Header />
          <Switch>
            <Route path="/:categoryType/:categoryCode/:categoryName">
              <Products />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
