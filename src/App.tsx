import React from "react";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";

import s from "./App.module.scss";

const App = () => {
  return (
    <div className="App">
      <div className={s.navigation}>
        <SideBar />
      </div>
      <div className={s.main_container}>
        <Header />
      </div>
    </div>
  );
};

export default App;
