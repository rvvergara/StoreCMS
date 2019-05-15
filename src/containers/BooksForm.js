import React from 'react';

const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

function BooksForm() {
  const options = CATEGORIES.map((category)=>(<option key={category}>{category}</option>));
  return (
    <form>
      <input />
      <select>
        {options}
      </select>
      <button>Submit</button>
    </form>
  );
}

export default BooksForm;