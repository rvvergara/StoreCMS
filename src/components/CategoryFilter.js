import React        from 'react';
import {CATEGORIES} from "../containers/BooksForm";

const CategoryFilter = (props) => {
  const { onFilterChange } = props;
  const options = ['All',...CATEGORIES].map((category) => (<option key={category}>{category}</option>));
  return (
    <form className="categoryForm">
      <select onChange={onFilterChange}>
        {options}
      </select>
    </form>
  );
};

export default CategoryFilter;