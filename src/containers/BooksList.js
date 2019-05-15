import React         from 'react';
import {connect}     from 'react-redux';
import Book          from '../components/Book';

function mapStateToProps(state) {
  return {books: state};
}

function BooksList(props) {
  const {books} = props;
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) => {
          return <Book id={book.id} book={book} />
        })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  mapStateToProps,
)(BooksList);