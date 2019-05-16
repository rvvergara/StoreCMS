import React, {Component} from 'react';
import {connect}          from 'react-redux';
import { createBook } from '../actions/index';

const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const mapDispatchToProps = dispatch => {
  return {
    books: (book) => {
      dispatch(createBook(book))
    }
  };
};


class BooksForm extends Component {

  state = {title: '', category: ''};

  handleChange = (type,val) => {
    this.setState({
      [type]: val
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {title, category } = this.state;
    if(title === '' || category === ''){
      alert('Cant be blank')
      return;
    }  
    this.props.books({id: Math.random(),title: title,category: category});

    this.setState(() => ({
      title: '',
      category: ''
    }));

  };

  render() {
    const options = CATEGORIES.map((category) => (<option key={category}>{category}</option>));
    return (
      <form>
        <input onChange={e => this.handleChange('title',e.target.value)} value={this.state.title} />
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