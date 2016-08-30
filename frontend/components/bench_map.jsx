import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {

    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  }

  // componentWillUpdate() {
  //   this.MarkerManager.updateMarkers();
  // }

  componentWillReceiveProps(newProps) {
    console.log("in component did update");
    this.MarkerManager.updateMarkers();
    // let x = new MarkerManager(this.map);
    // x.updateMarkers();
  }

  render() {
    return (
      <div id='map-container' ref='map'></div>
    );
  }
}

export default BenchMap;
