import React         from 'react';
import {connect}     from 'react-redux';
import Book          from '../components/Book';
import { removeBook } from '../actions/index';
function mapStateToProps(state) {
  return {books: state};
}

const mapDispatchToProps = dispatch => {
  return {
    remove: (book) => {
      dispatch(removeBook(book))
    }
  };
};

const BooksList = (props) => {
  const {books} = props;
  const handleRemoveBook = (book) =>{
    props.remove(book)
  }
  return (
    <div>
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
        {books.map((book) => {
          return <Book key={book.id} book={book} onRemove={()=>handleRemoveBook(book)} />
        })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(BooksList);