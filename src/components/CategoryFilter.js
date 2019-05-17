import React        from 'react';
import {CATEGORIES} from "../containers/BooksForm";

const CategoryFilter = (props) => {
  const { onFilterChange, filter } = props;
  console.log('fltr', filter);
  const options = ['All',...CATEGORIES].map((category) => (<option key={category}>{category}</option>));
  return (
    <form>
      <select onChange={onFilterChange}>
        {options}
      </select>
    </form>
  );
};

export default CategoryFilter;