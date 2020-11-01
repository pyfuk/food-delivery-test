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
  const total = store.total;
  let content = null;

  const addProduct = (product) => {
    store.addToCart(product);
    console.log(store.cart);
  };

  const removeProduct = (product) => {
    store.removeFromCart(product);
    console.log(store.cart);
  };

  if (total.totalCount > 0) {
    content = (
      <div className="cart-container">
        <div className="cart-products-container">
          <div className="cart-products-header">
            <h1 className="cart-header">Корзина</h1>
            <span className="cart-products-count">
              {total.totalCount} товаров
            </span>
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

        <div className="cart-total">
          <div className="cart-payment-detail">
            <span>{total.totalCount} товаров на сумму</span>
            <b>{total.totalPrice} &#8381;</b>
          </div>
          <div className="cart-payment-detail">
            <span>Скидка</span>
            <b>Нет</b>
          </div>
          <div className="cart-payment-detail">
            <span>Доставка</span>
            <b>Бесплатно</b>
          </div>
          <div className="cart-payment-detail">
            <span>Итого к оплате</span>
            <b>{total.totalPrice} &#8381;</b>
          </div>
          <button className="cart-order-button">
            <span className="cart-order-butto-header">Оформить заказ</span>
            <span className="cart-order-butto-price">{total.totalPrice}</span>
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="cart-container">
        <div className="cart-error-container">
          <h1 className="cart-error-header">Корзина пуста</h1>
          <p className="cart-error-context">
            Вкусную еду и свежие продукты можно найти в каталоге или начать с
            главной
          </p>
          <Link to={`/`} className="cart-error-button">
            Перейти на главную
          </Link>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
});

export default Cart;
