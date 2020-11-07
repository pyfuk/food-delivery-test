import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../../helpers/HttpReqests";
import { ProductModel } from "../../types/ProductModel";
import ProductCard from "./product-card/ProductCard";

import s from "./Products.module.scss";

interface ProductsParam {
  categoryCode: string;
  categoryType: "products" | "meals";
  categoryName: string;
}

interface ProductsModel {
  items: ProductsModel[];
  totalCount: number;
}
const Products = () => {
  const { categoryCode, categoryType, categoryName } = useParams<
    ProductsParam
  >();

  const url = `https://back.danilovskymarket.ru/${categoryType}?category=${categoryCode}`;
  let products: ProductsModel | any;
  const productsData = useAxiosGet(url);

  if (productsData.data) {
    products = productsData.data;
    console.log(products);
  }

  return (
    <div>
      <div className={s.category_slider_container}></div>
      <div className={s.products_list_container}>
        <h1>{categoryName}</h1>
        <div className={s.count_and_sort}>
          {/* TODO: Сделать склонение */}
          <div>{products ? products.totalCount : 0} товар</div>
          <div>Популярное</div>
        </div>
        <div className={s.products_list}>
          {products &&
            products.items.map((product: ProductModel, key: number) => {
              return <ProductCard product={product} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
