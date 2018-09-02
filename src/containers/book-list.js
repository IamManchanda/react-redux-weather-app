import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';
 
const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectBook }, dispatch);
};
class BookList extends Component {
  renderList() {
    /* eslint-disable no-shadow */
    const { books, selectBook } = this.props;
    return books.map((book) => (
      <li 
        role="presentation"
        className="list-group-item is-anchor" 
        key={ book.id } 
        onClick={ () => selectBook(book) }
      >
        { book.title }
      </li>
    ));
  }

  render() {
    return (
      <div className="cell medium-4">
        <ul className="list-group">
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
