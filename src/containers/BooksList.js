import React          from 'react';
import {connect}      from 'react-redux';
import Book           from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from "../components/CategoryFilter";

function mapStateToProps(state) {
  return {books: state.books, filter: state.filter};
}

const mapDispatchToProps = dispatch => ({
    remove: (book) => dispatch(removeBook(book)),
    changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const BooksList = (props) => {
  const {books, filter} = props;

  const handleRemoveBook = (book) =>{
    props.remove(book);
  };

  const handleFilterChange = (filter) => {
    props.changeFilter(filter);
  };

  let showBooks = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter onFilterChange={(e) => handleFilterChange(e.target.value)} />
      <table>
        <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {showBooks.map((book) => {
          return <Book key={book.id} book={book} onRemove={()=>handleRemoveBook(book)} />
        })}
        </tbody>
      </table>
    </div>
  );
};


export default connect(
  mapStateToProps,mapDispatchToProps
)(BooksList);