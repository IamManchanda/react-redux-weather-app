import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  state = { term: '' };
  
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { state, props } = this;
    props.fetchWeather(state.term);
    this.setState({ term: '' });
  };

  render() {
    const { state, onFormSubmit, onInputChange } = this;
    return (
      <Fragment>
        <form onSubmit={ onFormSubmit }>  
          <div className="input-group">
            <span className="input-group-label" role="img" aria-label="Search">🔍</span>
            <input 
              className="input-group-field" 
              type="text"
              placeholder="Get a five day forecast of your favourite cities in India." 
              value={ state.term }
              onChange={ onInputChange }
            />
            <div className="input-group-button">
              <input type="submit" className="button" value="Search" />
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
