import React from "react";
import ProTypes from 'prop-types';


const Categories = React.memo(
  function Categories({ activeCategory, items, onClickCategory }) {

    return (
      <div>
        <div className="categories">
          <ul>
            <li className={activeCategory === null ? "active" : ""} onClick={() => onClickCategory(null)}>Все</li>
            {items &&
              items.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
)
Categories.proTypes = {
  // activeCategory: ProTypes.oneOf([ProTypes.number, null]),
  items: ProTypes.arrayOf(ProTypes.string).isRequired,
  onClickCategory: ProTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories;
