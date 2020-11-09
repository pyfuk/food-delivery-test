import React from "react";
import { observer } from "mobx-react";
import s from "./Cart.module.scss";
import { useStore } from "../../store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../types/ProductModel";

const Cart = observer(() => {
  const store = useStore();

  const products = store.cart._list.toJSON();

  console.log(products);

  return (
    <div className={s.cart_container}>
      <div className={s.products_container}>
        <div className={s.nameAndCount}>
          <h1>Корзина</h1>
          <span>
            {store.cart.getProductsCount() ? store.cart.getProductsCount() : 0}
            &nbsp;товара
          </span>
        </div>

        <div className={s.products}>
          <div className={s.products_header}>
            <h2>Продукты</h2>
            <button onClick={() => store.cart.removeAllProducts()}>
              Очистить
            </button>
          </div>

          {Object.keys(products).map((code: string) => {
            return (
              <article className={s.product_container} key={code}>
                <div className={s.product_item}>
                  <img
                    src={products[code].product.images[0].path}
                    alt="product"
                  ></img>
                  <div className={s.product}>
                    <h2>{products[code].product.name}</h2>
                    <div className={s.priceAndButtons}>
                      <div className={s.buttons}>
                        <button
                          onClick={() =>
                            store.cart.removeFromCart(
                              -1,
                              products[code].product as Product
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <div className={s.counterValue}>
                          {products[code].count} шт
                        </div>
                        <button
                          onClick={() =>
                            store.cart.addToCart(
                              +1,
                              products[code].product as Product
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <b className={s.price}>
                        {products[code].product.price * products[code].count} ₽
                      </b>
                    </div>
                  </div>
                </div>
                <button
                  className={s.remove}
                  onClick={() => store.cart.removeProduct(code)}
                >
                  X
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Cart;
