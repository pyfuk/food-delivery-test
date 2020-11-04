import React from "react";

import s from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={s.sidebar_container}>
      <div className={s.image_container}>
        <img
          src="https://delivery.danilovskymarket.ru/static/images/logo.svg"
          alt="logo"
        />
      </div>
      <nav className={s.navigation_container}>
        <div className={s.address}>
          <button>
            <img
              src={process.env.PUBLIC_URL + "/header/location.svg"}
              alt="location"
            />
            <p>ул Мытная, д 74</p>
          </button>
        </div>
        <div className={s.cotigories_container}></div>
      </nav>
    </div>
  );
};

export default SideBar;
