import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    //when adding a list, we must:
    //add a key to the react list, 
    //we must add the key to the top level element
    //which has to be a unique piece of data.
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    //if you find yourself replicating markup,
    //like we did with generating the chart with sparklines
    //you will most likely be able to create a separate component
    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td><Chart data={ temps } color="green" units="C" /></td>
        <td><Chart data={ pressures } color="red" units="hPa" /></td>
        <td><Chart data={ humidities } color="black" units="%" /></td>
      </tr>
    ); 
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // equal to { weather: weather }
}

//hooking up to redux state
export default connect(mapStateToProps)(WeatherList);
