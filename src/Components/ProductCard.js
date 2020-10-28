import React from "react";

function ProductCard(props) {
  return (
    <div className="product-card-container">
      <div className="product-card-shop-wrap">{props.product.shopCode}</div>
      <div className="product-card-item">
        <div>
          <div className="product-card-image">
            <img src={props.product.images[0].path} alt="img" />
          </div>
          <p>{props.product.name}</p>
          <p>{props.product.weight} г</p>
        </div>
        <div className="product-card-price-container">
          <p>{props.product.price} P</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
