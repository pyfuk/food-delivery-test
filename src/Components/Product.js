import React from "react";
import { useAxiosGet } from "../Hooks/HttpReqests";
import { useParams } from "react-router-dom";

function Product() {
  let content = null;

  const { code } = useParams();
  const url = `https://back.danilovskymarket.ru/products/${code}`;

  let product = useAxiosGet(url);
  if (product.error) {
    content = <p>ERROR</p>;
  }

  if (product.data) {
    console.log(product.data);
    content = (
      <div>
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
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
