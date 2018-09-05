import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../components/sparklines-chart';

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
    const getListArray = (item) => list.map(currentWeather => currentWeather.main[item]);
    const tempArray = getListArray('temp');
    const pressureArray = getListArray('pressure');
    const humidityArray = getListArray('humidity');
    console.log(name, { tempArray, humidityArray, pressureArray });
    return (
      <Fragment key={ name }>
        <tr>
          <td className="text-center">{ name }</td>
          <td className="text-center">
            <SparklinesChart 
              height={ 90 }
              width={ 180 }
              dataArray={ tempArray }
              color="#0ea29d"
            />
          </td>
          <td className="text-center">
            <SparklinesChart 
              height={ 120 }
              width={ 180 }
              dataArray={ pressureArray }
              color="#0D355A"
            />
          </td>
          <td className="text-center">
            <SparklinesChart 
              height={ 120 }
              width={ 180 }
              dataArray={ humidityArray }
              color="#0ea29d"
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
        <table className="radius bordered shadow">
          <thead>
            <tr>
              <th className="text-center">City</th>
              <th className="text-center">Temperature</th>
              <th className="text-center">Pressure</th>
              <th className="text-center">Humidity</th>
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
