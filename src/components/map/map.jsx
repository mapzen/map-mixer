// main.js
import React, { Component } from 'react';
/* gotta change this to mapzen.js css */
import 'leaflet/dist/leaflet.css';
import './map.css';

import Mapzen from 'mapzen.js';

let layer, scene;

class Map extends Component {
  componentDidMount() {
    // creates a map with basic buble wrap style
    var lon = -74.009;
    var lat = 40.70531;
    L.Mapzen.apiKey = this.apiKey = 'valhalla-RfDii2g'; // eslint-disable-line no-undef
    var map = Mapzen.map('map'); // eslint-disable-line no-undef

    map.setView([lat, lon], 13);

    // Mapzen.geocoder().addTo(map); // eslint-disable-line no-undef

    layer = map.getTangramLayer();
    scene = layer.scene;
  }

  render() {
    return (
      <div id = "map" />
    );
  }
}

export default Map;