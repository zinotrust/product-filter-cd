import React from "react";
import "./Categories.css";

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="--btn --btn-secondary btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {/* {category} */}
            {/* {category.toUpperCase()} */}
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
