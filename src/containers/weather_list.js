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
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    //if you find yourself replicating markup,
    //like we did with generating the chart with sparklines
    //you will most likely be able to create a separate component
    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td>
          <Chart data={ temps } color="orange" />
        </td>
      </tr>
    ); 
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
