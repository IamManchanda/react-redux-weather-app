import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../components/sparklines-chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWelcome() {
    return (
      <Fragment>
        <tr>
          <td colSpan="4" className="text-center">
            Please enter a city to get started.
          </td>
        </tr>
      </Fragment>
    );
  }

  renderWeather(currentWeatherData) {
    if (!currentWeatherData) return null;
    const { city, list } = currentWeatherData;
    const { name } = city;
    const { lat, lon } = city.coord;
    const getListArray = (item) => list.map(currentWeather => currentWeather.main[item]);
    const tempArray = getListArray('temp');
    const pressureArray = getListArray('pressure');
    const humidityArray = getListArray('humidity');
    return (
      <Fragment key={ name }>
        <tr>
          <td className="text-center">
            <GoogleMap lat={ lat } lon={ lon } name={ name } />
          </td>
          <td className="text-center">
            <SparklinesChart 
              dataArray={ tempArray }
              color="#0ea29d"
              units="K"
            />
          </td>
          <td className="text-center">
            <SparklinesChart 
              dataArray={ pressureArray }
              color="#0D355A"
              units="hPa"
            />
          </td>
          <td className="text-center">
            <SparklinesChart 
              dataArray={ humidityArray }
              color="#0ea29d"
              units="%"
            />
          </td>
        </tr>
      </Fragment>
    );
  }

  render() {
    const { props, renderWeather, renderWelcome } = this;
    const { weather } = props;
    return (
      <Fragment>
        <table className="weather-table radius bordered shadow">
          <thead>
            <tr>
              <th className="text-center">City</th>
              <th className="text-center">Temperature (K)</th>
              <th className="text-center">Pressure (hPa)</th>
              <th className="text-center">Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { (weather.length === 0) ? renderWelcome() : weather.map(renderWeather) }
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
