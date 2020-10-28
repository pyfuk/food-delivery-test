import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
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
          <button className="product-card-button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
