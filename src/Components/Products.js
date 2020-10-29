import React from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import ProductCard from "./ProductCard";

function Products() {
  let content = null;
  const url = `https://back.danilovskymarket.ru/products?category=molochnie_produkti_siri`;

  let products = useAxiosGet(url);
  if (products.error) {
    content = <p>ERROR</p>;
  }

  if (products.data) {
    content = products.data.items.map((product, key) => (
      <div key={key} className="products-cont">
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <main className="main-container">
      <h1>Молочные продукты, сыры</h1>

      <span>{products.data ? products.data.totalCount : 0} товара</span>

      <div>
        <div className="products-container">{content}</div>
      </div>
    </main>
  );
}

export default Products;
