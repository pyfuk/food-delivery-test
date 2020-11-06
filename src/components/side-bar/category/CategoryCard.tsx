import React, { useState } from "react";
import { CategoryModel } from "../../../types/CategoryModel";
import { CategoryType } from "../SideBar";

import s from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: CategoryType;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={s.category_container} onClick={() => setActive(!active)}>
        <img src={category.logo.path} alt={category.logo.nameOptions.alt} />
        <p>{category.name}</p>
        {category.subcategories && (
          <img
            src={process.env.PUBLIC_URL + "/navigation/arrow.svg"}
            alt="subcategories"
            className={active ? s.active : s.inactive}
          />
        )}
      </div>
      {active &&
        category.subcategories &&
        category.subcategories.map((subcategory, key) => {
          return (
            <div className={s.subcategory} key={key}>
              <span>{subcategory.name}</span>
              <img
                src={process.env.PUBLIC_URL + "/navigation/arrow.svg"}
                alt="subcategories"
                className={active ? s.active : s.inactive}
              />
            </div>
          );
        })}
    </>
  );
};

export default CategoryCard;
