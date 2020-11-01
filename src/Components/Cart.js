import React from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../Hooks/Store";
import { observer } from "mobx-react";

const Cart = observer((props) => {
  const store = React.useContext(StoreContext);

  const products = store.cart;

  const a = store.total;

  console.log(a);

  const addProduct = (product) => {
    store.addToCart(product);
    console.log(store.cart);
  };

  const removeProduct = (product) => {
    store.removeFromCart(product);
    console.log(store.cart);
  };

  return (
    <div className="cart-container">
      <div className="cart-products-container">
        <div className="cart-products-header">
          <h1 className="cart-header">Корзина</h1>
          <span className="cart-products-count">8 товаров</span>
        </div>
        <div className="cart-products">
          <div className="cart-products-header">
            <h2 className="cart-products-header-h2">Продукты</h2>
            <button className="cart-products-header-clear">Очистить</button>
          </div>
          {products.map((data, key) => (
            <article key={key} className="cart-product-container">
              <div className="cart-product">
                <Link
                  to={`?product=${data.product.code}`}
                  className="cart-product-img"
                >
                  <img
                    src={data.product.images[0].path}
                    alt={data.product.name}
                  />
                </Link>
                <div className="cart-product-body">
                  <h2 className="cart-product-body-name">
                    {data.product.name}
                  </h2>
                  <div className="cart-product-body-content">
                    <div className="cart-product-body-buttons">
                      <button
                        className="cart-product-button-minus"
                        onClick={() => removeProduct(data.product)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="cart-product-button-count">
                        {data.count} шт
                      </span>
                      <button
                        className="cart-product-button-plus"
                        onClick={() => addProduct(data.product)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <b className="cart-product-price">
                      {data.product.price * data.count} &#8381;
                    </b>
                  </div>
                </div>
              </div>
              <button className="cart-product-remove">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Cart;
