import React from "react";

import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main_container}>
      <div className={s.header}>
        <h1>Доставка свежих продуктов и готовой еды</h1>
        <p>365 дней в году развозим заказы по Москве и Московской области</p>
        <section>
          <button>
            <img src={process.env.PUBLIC_URL + "/main/user.svg"} alt="user" />
            <p>Войти</p>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Main;
