import React from "react";
import Products from "./Products/Products";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/recommended";

const App = () => {
  return (
    <>
      <Nav />
      <Products />
      <Recommended/>
    </>
  );
};
export default App;
