import React, { useState } from "react";
import { useAxiosGet } from "../../helpers/HttpReqests";
import { groupBy } from "lodash";
import { Category } from "../../types/CategoryModel";
import CategoryCard from "./category/CategoryCard";
import { observer } from "mobx-react";
import s from "./SideBar.module.scss";
import { useStore } from "../../store/Store";
import { Link } from "react-router-dom";

export type CategoryType = Category & { subcategories: Category[] };

const SideBar = observer(() => {
  let categories: CategoryType[] = [];

  const store = useStore();

  const [active, setActive] = useState(false);

  const allCategories = useAxiosGet(
    "https://back.danilovskymarket.ru/categories"
  );

  if (allCategories.data) {
    const groupedCategories = groupBy(allCategories.data, "parentCategoryCode");

    //Type Any because of groupBy
    const [meals, products] = ["meals", "products"].map((data) => {
      return groupedCategories[data]?.map((category: any) => ({
        ...category,
        subcategories: groupedCategories[category.code]
          ? [
              { code: category.code, name: "Все сразу" },
              ...groupedCategories[category.code],
            ]
          : null,
      }));
    });

    if (active) {
      categories = meals;
    } else {
      categories = products;
    }
  }

  return (
    <div
      className={
        store.navigation._isOpened
          ? s.sidebar_container
          : s.sidebar_container_close
      }
    >
      <Link to="/">
        <div className={s.image_container}>
          <img
            src="https://delivery.danilovskymarket.ru/static/images/logo.svg"
            alt="logo"
          />
        </div>
      </Link>
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
        <div className={s.cotigories_container}>
          <div className={s.tab_list}>
            <div className={s.left_tab} onClick={() => setActive(false)}>
              ПРОДУКТЫ
            </div>
            <div className={s.right_tab} onClick={() => setActive(true)}>
              ГОТОВАЯ ЕДА
            </div>
            <div
              className={active ? s.switcher + " " + s.right : s.switcher}
            ></div>
          </div>
          {categories.length > 0 &&
            categories.map((category: CategoryType, key: number) => {
              return (
                <CategoryCard
                  category={category}
                  type={active ? "meals" : "products"}
                  key={key}
                />
              );
            })}
        </div>
      </nav>
    </div>
  );
});

export default SideBar;
