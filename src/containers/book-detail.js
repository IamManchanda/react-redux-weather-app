/* eslint-disable react/prefer-stateless-function */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { activeBook } = state;
  return { activeBook };
};

class BookDetail extends Component {
  render() {
    const { activeBook } = this.props;
    return (
      <div className="cell medium-8">
        { !activeBook ? (
          <h3>Select a book please!</h3>
        ) : (
          <Fragment>
            <h3>Title: { activeBook.title }</h3>
            <h4>Pages: { activeBook.pages }</h4>
          </Fragment>
        ) }
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookDetail);
