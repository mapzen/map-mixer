// main.js
import React, { Component } from 'react'
import Mapzen from 'mapzen.js'

import './index.css'

const getImportConfig = ({ baseMap, label, color }) => {
  
  let baseMapURL = baseMap.baseURL
  let labelURL = `${label.baseURL}${label.value}${label.suffixURL}`
  if (baseMap.title === 'refill') {
    let colorThemeURL = `${color.baseURL}${color.value}${color.suffixURL}`
    return {import: [baseMapURL, labelURL, colorThemeURL]}
  } else {
    return {import: [baseMapURL, labelURL]}
  }
}

class Map extends Component {
  componentDidMount () {
    // creates a map with basic buble wrap style
    var lon = -74.009
    var lat = 40.70531

    L.Mapzen.apiKey = this.apiKey = 'valhalla-RfDii2g' // eslint-disable-line no-undef
    
    let initialConfig = getImportConfig(this.props)
    var map = Mapzen.map('map', {
      tangramOptions: {
        scene: initialConfig
      }
    }) // eslint-disable-line no-undef

    map.setView([lat, lon], 13)

    Mapzen.geocoder({
      position: 'topright'
    }).addTo(map)

    this.scene = map.getTangramLayer().scene
  }

  shouldComponentUpdate () {
    return false
  }

  // We are using componentWillRecieveProps here checking the props
  // affecting Tangram configuration is changed (if so, update Tangram config)
  // This is the way we came up with to change the config of Tangram
  // insdie of the related component (TangramLayer), but outside of React lifecycle
  componentWillReceiveProps (nextProps) {
    if (nextProps.loading) {
      let newConfig = getImportConfig(nextProps)
      this.scene.load(newConfig)
        .then(() => { nextProps.loadingMapDone() })
    }
  }

  render () {
    return (
      <div id='map' />
    )
  }
}

export default Map
