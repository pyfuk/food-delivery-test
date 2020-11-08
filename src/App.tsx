import React, { useMemo } from "react";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products-list/Products";
import s from "./App.module.scss";
import { storeContext } from "./store/Store";
import { initializeStore } from "./store/InitializeStore";
import { SelfRootStore } from "./store/SelfRootStore";

const App = () => {
  const store = useMemo(() => initializeStore(), []) as SelfRootStore;

  return (
    <storeContext.Provider value={store}>
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
    </storeContext.Provider>
  );
};

export default App;
