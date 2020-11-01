import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { productSub } from "../Hooks/Service";
import { Link } from "react-router-dom";
import { StoreContext } from "../Hooks/Store";

function ProductCard(props) {
  const [button, setPressed] = useState({
    pressed: false,
    count: 0,
  });
  const store = React.useContext(StoreContext);
  let addButoon = null;

  if (button.pressed) {
    addButoon = (
      <div className="product-card-buttons">
        <button
          className="product-card-button-minus"
          onClick={() => removeProduct()}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="product-card-button-counter">{button.count} шт</div>
        <button
          className="product-card-button-plus"
          onClick={() => addProduct()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }

  if (!button.pressed) {
    addButoon = (
      <button className="product-card-button" onClick={() => addProduct()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  }

  useEffect(() => {
    const prod = store.getProductInCart(props.product);
    if (prod) {
      setPressed({ pressed: true, count: prod.count });
    }
  });

  const addProduct = () => {
    setPressed({ pressed: true, count: button.count + 1 });

    store.addToCart(props.product);
    console.log(store.cart);
  };

  const removeProduct = () => {
    if (button.count === 1) {
      setPressed({ pressed: false, count: button.count - 1 });
    } else {
      setPressed({ pressed: true, count: button.count - 1 });
    }
    store.removeFromCart(props.product);
    console.log(store.cart);
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
