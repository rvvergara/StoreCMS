import React from "react";

const Book = props => {
  const { id, title, category } = props.book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button onClick={props.onRemove}>Remove</button></td>
    </tr>
  );
};

export default Book;
