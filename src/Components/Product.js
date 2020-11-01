import React, { useState, useEffect } from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../Hooks/Store";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product() {
  let content = null;
  let addButton = null;
  const store = React.useContext(StoreContext);
  const [button, setPressed] = useState({
    pressed: false,
    count: 0,
  });

  // const { code } = useParams();

  const query = new URLSearchParams(useLocation().search);
  const param = query.get("product");

  const url = `https://back.danilovskymarket.ru/products/${param}`;

  let product = useAxiosGet(url);

  const addProduct = (product) => {
    setPressed({ pressed: true, count: button.count + 1 });

    store.addToCart(product);
    console.log(store.cart);
  };

  const removeProduct = (product) => {
    if (button.count === 1) {
      setPressed({ pressed: false, count: button.count - 1 });
    } else {
      setPressed({ pressed: true, count: button.count - 1 });
    }
    store.removeFromCart(product);
    console.log(store.cart);
  };

  if (product.error) {
    content = <p>ERROR</p>;
  }
  useEffect(() => {
    if (product.data) {
      const prod = store.getProductInCart(product.data);
      if (prod) {
        setPressed({ pressed: true, count: prod.count });
      }
    }
  }, [product.data, store]);

  if (product.data) {
    if (button.pressed) {
      addButton = (
        <div className="product-card-buttons">
          <button
            className="product-card-button-minus"
            onClick={() => removeProduct(product.data)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="product-card-button-counter">{button.count} шт</div>
          <button
            className="product-card-button-plus"
            onClick={() => addProduct(product.data)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      );
    }

    if (!button.pressed) {
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

export default Product;
