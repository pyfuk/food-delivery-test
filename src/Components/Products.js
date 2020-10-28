import React from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import ProductCard from "./ProductCard";

function Products() {
  let content = null;
  const url = `https://back.danilovskymarket.ru/products?category=molochnie_produkti_siri`;

  let products = useAxiosGet(url);

  console.log(products);

  if (products.error) {
    content = <p>ERROR</p>;
  }

  if (products.loading) {
    content = <p>{/* <Loader /> */}</p>;
  }

  if (products.data) {
    content = products.data.items.map((product, key) => (
      <div key={key}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <main className="main-container">
      <h1>Молочные продукты, сыры</h1>

      <span>{products.data ? products.data.totalCount : 0} товара</span>

      <div className="products-container">{content}</div>
    </main>
  );
}

export default Products;
