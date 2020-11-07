import React, { useState } from "react";
import { CategoryType } from "../SideBar";
import { Link, useHistory } from "react-router-dom";
import s from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: CategoryType;
  type: "products" | "meals";
}

const CategoryCard = ({ category, type }: CategoryCardProps) => {
  const [active, setActive] = useState(false);

  const history = useHistory();

  const navigate = () => {
    if (!category.subcategories)
      history.push(`/${type}/${category.code}/${category.name}`);
  };

  return (
    <>
      <div
        className={s.category_container}
        onClick={() => {
          setActive(!active);
          navigate();
        }}
      >
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
            <Link
              to={`/${type}/${subcategory.code}/${subcategory.name}`}
              key={key}
            >
              <div className={s.subcategory}>
                <span>{subcategory.name}</span>
                <img
                  src={process.env.PUBLIC_URL + "/navigation/arrow.svg"}
                  alt="subcategories"
                  className={active ? s.active : s.inactive}
                />
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default CategoryCard;
