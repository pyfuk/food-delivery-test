import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { productSub } from "../Hooks/Service";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [button, setPressed] = useState({
    pressed: false,
    count: 0,
  });

  let addButoon = null;

  if (button.pressed) {
    addButoon = (
      <div className="product-card-buttons">
        <button
          className="product-card-button-minus"
          onClick={() => minusCount()}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="product-card-button-counter">{button.count} шт</div>
        <button
          className="product-card-button-plus"
          onClick={() => plusCount()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }

  if (!button.pressed) {
    addButoon = (
      <button className="product-card-button" onClick={() => plusCount()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  }

  const plusCount = () => {
    setPressed({ pressed: true, count: button.count + 1 });

    let productStorage = localStorage.getItem("products");

    if (!productStorage || productStorage === "null") {
      const products = [{ product: props.product.code, count: 1 }];
      localStorage.setItem("products", JSON.stringify(products));
    } else if (productStorage) {
      let jsonProducts = JSON.parse(productStorage);
      if (!addOrRemoveFromStorage(true, jsonProducts)) {
        jsonProducts.push({ product: props.product.code, count: 1 });
        localStorage.setItem("products", JSON.stringify(jsonProducts));
      }
    }
  };

  const minusCount = () => {
    let jsonProducts = JSON.parse(localStorage.getItem("products"));

    if (button.count === 1) {
      setPressed({ pressed: false, count: button.count - 1 });
      addOrRemoveFromStorage(false, jsonProducts);
    } else {
      setPressed({ pressed: true, count: button.count - 1 });
      addOrRemoveFromStorage(false, jsonProducts);
    }
  };

  const addOrRemoveFromStorage = (isPlus, jsonProducts) => {
    const existProduct = jsonProducts.find(
      (c) => c.product === props.product.code
    );
    if (existProduct) {
      const existIdxProduct = jsonProducts.indexOf(existProduct);
      if (isPlus) {
        jsonProducts[existIdxProduct].count++;
      } else {
        if (jsonProducts[existIdxProduct].count === 1) {
          jsonProducts = jsonProducts.filter(
            (p) => p.product !== jsonProducts[existIdxProduct].product
          );
        } else {
          jsonProducts[existIdxProduct].count--;
        }
      }
      localStorage.setItem("products", JSON.stringify(jsonProducts));
      return true;
    }

    return false;
  };

  const sendSub = () => {
    productSub.next();
  };

  return (
    <div className="product-card-container">
      <div className="product-card-shop-wrap">{props.product.shopCode}</div>
      <div className="product-card-item">
        <Link to={`/${props.product.code}`}>
          <div onClick={() => sendSub()}>
            <div className="product-card-image">
              <img
                src={props.product.images[0].path}
                alt={props.product.name}
              />
            </div>
            <p className="product-card-name">{props.product.name}</p>
            <p className="product-card-weight">{props.product.weight} г</p>
          </div>
        </Link>
        <div className="product-card-price-container">
          <p className="product-card-price">
            {props.product.price}
            <span className="product-card-price-ruble">&#8381;</span>
          </p>
          {addButoon}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
