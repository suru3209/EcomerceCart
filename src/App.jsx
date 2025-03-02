import React, { useState } from "react";
import Products from "./Products/Products";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/recommended";
import Sidebar from "./Sidebar/Sidebar";

//database
import products from "./DB/Items";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //-----------input filter--------------
  const [query, setQuery] = useState("");

  const handleinputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //-----------Radio filter--------------

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //-----------Buttons filter--------------

  const handleClick = (e) => {
    selectedCategory(e.target.value);
  };

  function filterdData(products, selected, query) {
    let filterdProducts = products;

    //Filtering input items
    if (query) {
      filterdProducts = filteredItems;
    }

    // selected filter items
    if (selected) {
      filterdProducts = filterdProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
  }

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
