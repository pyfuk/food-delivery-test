import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../../helpers/HttpReqests";
import { ProductModel } from "../../types/ProductModel";

import s from "./Products.module.scss";

interface ProductsParam {
  code: string;
  type: "products" | "meals";
}

interface ProductsModel {
  items: ProductsModel[];
  totalCount: number;
}
const Products = () => {
  const { code, type } = useParams<ProductsParam>();

  const url = `https://back.danilovskymarket.ru/${type}?category=${code}`;
  let products: ProductsModel | any;
  const productsData = useAxiosGet(url);

  if (productsData.data) {
    products = productsData.data;
  }

  console.log(products);

  return (
    <div>
      {/* <div className={s.category_slider_container}></div>
      <div className={s.products_list_container}>
        <div className={s.products_list}>
         
        </div>
      </div> */}
      {products &&
        products.items.map((product: ProductModel, key: number) => {
          return <div key={key}> {product.name}</div>;
        })}
    </div>
  );
};

export default Products;
