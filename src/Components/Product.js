import React from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import { useParams } from "react-router-dom";

function Product() {
  let content = null;

  const { code } = useParams();
  const url = `https://back.danilovskymarket.ru/products/${code}`;

  let product = useAxiosGet(url);
  if (product.error) {
    content = <p>ERROR</p>;
  }

  if (product.data) {
    content = <div> {product.data.name}</div>;
  }
  return <div>{content}</div>;
}

export default Product;
