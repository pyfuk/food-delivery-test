import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
const App = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
  );
};

export default App;
