import React, { Component } from 'react';

//waits for component to render then,
//embed google maps inside doc.
//then looks for refs el to embed the map in.
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }  
}

export default GoogleMap;
