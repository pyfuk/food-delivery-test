import React from "react";
import { useAxiosGet } from "../../helpers/HttpReqests";
import { groupBy } from "lodash";
import { CategoryModel } from "../../types/CategoryModel";

import s from "./Header.module.scss";

export type CategoryType = CategoryModel & { subcategories: CategoryModel[] };

const Header = () => {
  const categpries = useAxiosGet("https://back.danilovskymarket.ru/categories");

  if (categpries.data) {
    const groupedCategories = groupBy(categpries.data, "parentCategoryCode");

    //Type Any because of groupBy
    const [meals, products] = ["meals", "products"].map((data) => {
      return groupedCategories[data].map((category: any) => ({
        ...category,
        subcategories: groupedCategories[category.code],
      }));
    });
  }

  return (
    <header className={s.header_container}>
      <div className={s.menu_button}>
        <img
          src={process.env.PUBLIC_URL + "/header/menu_button.svg"}
          alt="menu"
        ></img>
      </div>
      <div className={s.search_block}>
        <form action="#">
          <div className={s.search_icon}>
            <img
              src={process.env.PUBLIC_URL + "/header/search.svg"}
              alt="search"
            ></img>
          </div>
          <div className={s.search_input}>
            <input
              type="text"
              placeholder="Поиск по товарам, категориям..."
            ></input>
          </div>
        </form>
      </div>
      <div className={s.user_block}>
        <div className={s.name_image}>
          <img
            src="https://delivery.danilovskymarket.ru/static/images/logo-left.svg"
            alt="logo"
          />
        </div>
        <div className={s.phone}>
          <div>
            <span>+7 (495) 276-00-00</span>
            <span>с 10:00 до 20:00</span>
          </div>
        </div>
        <div className={s.address}>
          <img
            src={process.env.PUBLIC_URL + "/header/location.svg"}
            alt="location"
          />
          <p>ул Мытная, д 74</p>
        </div>
        <div className={s.search_button}>
          <img
            src={process.env.PUBLIC_URL + "/header/search.svg"}
            alt="search"
          />
        </div>
        <div className={s.basket}>
          <div className={s.basket_icon}>
            <img
              src={process.env.PUBLIC_URL + "/header/basket.svg"}
              alt="basket"
            />
            <span>0</span>
          </div>
        </div>
        <div className={s.user}>
          <img src={process.env.PUBLIC_URL + "/header/user.svg"} alt="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
