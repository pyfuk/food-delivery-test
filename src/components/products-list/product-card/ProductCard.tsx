import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../../types/ProductModel";

import s from "./ProductCard.module.scss";

interface ProductParam {
  product: ProductModel;
}

const ProductCard = ({ product }: ProductParam) => {
  return (
    <div className={s.product_container}>
      <div className={s.shop}>
        <span>Smth</span>
      </div>
      <div className={s.product_item}>
        <Link to={"/"}>
          <div className={s.image_container}>
            <img src={product.images[0].path} alt="product" />
          </div>
          <p className={s.name}>{product.name}</p>
          <p className={s.weight}>{product.weight} г</p>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
