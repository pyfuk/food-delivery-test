import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../types/ProductModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";

import s from "./ProductCard.module.scss";
import { useStore } from "../../../store/Store";

interface ProductParam {
  product: Product;
}

const ProductCard = observer(({ product }: ProductParam) => {
  const store = useStore();
  const existProduct = store.cart.getProduct(product.code);

  return (
    <div
      className={
        existProduct ? s.product_container_selected : s.product_container
      }
    >
      <div className={s.shop}>
        <span>Smth</span>
      </div>
      <div className={s.product_item}>
        <Link to={"/"}>
          <div className={s.image_container}>
            <img src={product.images[0].path} alt="product" />
            <div className={s.selected}>
              <div className={s.circle}>
                <img
                  src={process.env.PUBLIC_URL + "/product/basket.svg"}
                  alt="cart"
                ></img>
              </div>
            </div>
          </div>
          <p className={s.name}>{product.name}</p>
          <p className={s.weight}>{product.weight} г</p>
        </Link>
        <div className={s.price}>
          <p>{product.price}</p>
          <div className={s.buttons}>
            <button
              className={s.minusButton}
              onClick={() => store.cart.removeFromCart(-1, product)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={s.counterValue}>{existProduct?.count} шт</div>
            <button
              className={s.plusButton}
              onClick={() => store.cart.addToCart(+1, product)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
