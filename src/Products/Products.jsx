import React from "react";
import "./Products.css";

import Card from "../components/Card";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Products;
