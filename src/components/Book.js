import React from "react";

const Book = props => {
  const { title, category } = props.book;
  return (
    <div className="singleBook">
    <div className="left">
    <span className="category">{category}</span>
      <span className="title">{title}</span>
      <button className="remove" onClick={props.onRemove}>Remove</button>
    </div>
    <div className="center">
      <div className="progressBar"></div>
      <div><span className="percentage">70 %</span><span className="completed">Completed</span></div>
      
      </div>
    <div className="right">
      <span className="current">Current Chapter</span>
      <span className="chapter">Chapter 4</span>
      <button className="update">Update Progress</button>
    </div>
    </div>
  );
};

export default Book;
