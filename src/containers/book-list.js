import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    const { books } = this.props;
    return books.map((book) => (
      <li className="list-group-item is-anchor" key={ book.id }>
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

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps)(BookList);
