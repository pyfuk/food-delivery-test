import React, { useState, useEffect } from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../Hooks/Store";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";

function Product() {
  let content = null;
  let addButton = null;
  const store = React.useContext(StoreContext);
  
  const query = new URLSearchParams(useLocation().search);
  const param = query.get("product");


  const productCount = store.getProductCountByCode(param);
  const url = `https://back.danilovskymarket.ru/products/${param}`;

  let product = useAxiosGet(url);

  const addProduct = (product) => {
    store.addProductCountToCart(product);
    console.log(store.cart);
  };

  const removeProduct = (product) => {
    store.removeProductCountToCart(product);
    console.log(store.cart);
  };

  if (product.error) {
    content = <p>ERROR</p>;
  }

  if (product.data) {
    if (productCount) {
      addButton = (
        <div className="product-card-buttons">
          <button
            className="product-card-button-minus"
            onClick={() => removeProduct(product.data)}
          >
            <FontAwesomeIcon icon={faMinus}/>
          </button>
          <div className="product-card-button-counter">{productCount} шт</div>
          <button
            className="product-card-button-plus"
            onClick={() => addProduct(product.data)}
          >
            <FontAwesomeIcon icon={faPlus}/>
          </button>
        </div>
      );
    } else {
      addButton = (
        <button
          className="product-button"
          onClick={() => addProduct(product.data)}
        >
          В корзину
        </button>
      );
    }

    content = (
      <React.Fragment>
        <div className="modal-product-img-comtainer">
          <img src={product.data.images[0].path} alt={product.data.name} />
        </div>
        <section className="modal-product-content-comtainer">
          <h2 className="modal-product-name">{product.data.name}</h2>
          <div className="modal-product-price-weight-container">
            <span className="modal-product-price">
              {product.data.price} &#8381;
            </span>
            <span className="modal-product-weight">
              {product.data.weight} г
            </span>
          </div>
          <div>
            <h3 className="modal-product-headers">Описание</h3>
            <p>{product.data.description[0]?.children[0].text}</p>
          </div>
          <div>
            <h3 className="modal-product-headers">Состав</h3>
            <ul>
              <li>{product.data.ingredients[0]}</li>
            </ul>
          </div>
        </section>
        <div className="product-button-container">{addButton}</div>
      </React.Fragment>
    );
  }
  return <React.Fragment>{content}</React.Fragment>;
}

export default observer(Product);
