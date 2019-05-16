import React, {Component} from 'react';
import {connect}          from 'react-redux';
import { books } from '../reducers/books';
import { CREATE_BOOK, REMOVE_BOOK, createBook } from '../actions/index';

const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const mapDispatchToProps = dispatch => {
  return {
    books: (book) => {
      dispatch(books(book, createBook()))
    }
  };
};


class BooksForm extends Component {

  state = {title: '', category: ''};

  handleChange = (type,val) => {
    // console.log(e.target.value);
    this.setState({
      [type]: val
    }, () => console.log(this.state ));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {title, category } = this.state;
    this.props.books([], createBook());

    this.setState(() => ({
      title: '',
      category: ''
    }));

  };

  render() {
    const options = CATEGORIES.map((category) => (<option key={category}>{category}</option>));
    return (
      <form>
        <input onChange={e => this.handleChange('title',e.target.value)} />
        <select onChange={e => this.handleChange('category',e.target.value)}>
          {options}
        </select>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);

// export default BooksForm;