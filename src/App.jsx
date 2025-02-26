import React from "react";
import Products from "./Products/Products";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/recommended";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};
export default App;
