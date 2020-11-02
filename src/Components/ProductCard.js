import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { productSub } from "../Hooks/Service";
import { Link } from "react-router-dom";
import { StoreContext } from "../Hooks/Store";
import { useObserver } from "mobx-react";
import { observer } from "mobx-react";

const ProductCard = observer((props) => {
  const store = React.useContext(StoreContext);

  let addButoon = null;

  const productCount = store.getProductCountByCode(props.product.code);
  
  if (productCount) {
    addButoon = (
      <div className="product-card-buttons">
        <button
          className="product-card-button-minus"
          onClick={() => removeProduct()}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="product-card-button-counter">{productCount} шт</div>
        <button
          className="product-card-button-plus"
          onClick={() => addProduct()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  } else {
    addButoon = (
      <button className="product-card-button" onClick={() => addProduct()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  }

  const addProduct = () => {

    store.addProductCountToCart(props.product);
    console.log(store.cart);
  };

  const removeProduct = () => {
    store.removeProductCountToCart(props.product);
    console.log(store.cart);
  };

  const sendSub = () => {
    productSub.next();
  };

  return useObserver(() => (
    <div className="product-card-container">
      <div className="product-card-shop-wrap">{props.product.shopCode}</div>
      <div className="product-card-item">
        <Link to={`?product=${props.product.code}`}>
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
  ));
});
export default ProductCard;
