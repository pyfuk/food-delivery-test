import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

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
      <button
        className="product-card-button"
        onClick={() => plusCount(props.product)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  }

  const plusCount = (product) => {
    setPressed({ pressed: true, count: button.count + 1 });
  };
  const minusCount = () => {
    if (button.count === 1) {
      setPressed({ pressed: false, count: button.count - 1 });
    } else {
      setPressed({ pressed: true, count: button.count - 1 });
    }
  };

  return (
    <div className="product-card-container">
      <div className="product-card-shop-wrap">{props.product.shopCode}</div>
      <div className="product-card-item">
        <div>
          <div className="product-card-image">
            <img src={props.product.images[0].path} alt="img" />
          </div>
          <p className="product-card-name">{props.product.name}</p>
          <p className="product-card-weight">{props.product.weight} г</p>
        </div>
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
