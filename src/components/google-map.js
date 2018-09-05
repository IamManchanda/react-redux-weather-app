import React, { Component, Fragment } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const { props, map } = this;
    const { lat, lon } = props;
    const lng = lon;
    /* eslint-disable-next-line */
    new google.maps.Map(map, { zoom: 12, center: { lat, lng } });
  }

  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <div className="google-maps-container">
          <div className="google-map-box" ref={ (m) => { this.map = m; } } />
        </div>
        <p>{ name }</p>
      </Fragment>
    );
  }
}

export default GoogleMap;
