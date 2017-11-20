// main.js
import React, { Component } from 'react'
import Mapzen from 'mapzen.js'
import { connect } from 'react-redux'

import defaultState from '../store/reducers/defaultState'
import MapData from '../../static/mapzen-maps'
import './index.css'

class Map extends Component {
  componentDidMount () {
    // creates a map with basic buble wrap style
    var lon = -74.009
    var lat = 40.70531

    L.Mapzen.apiKey = this.apiKey = 'valhalla-RfDii2g' // eslint-disable-line no-undef
    const initialConfig = getImportConfig(defaultState)
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
    const newConfig = getImportConfig(nextProps)
    this.scene.load(newConfig)
  }

  render () {
    return (
      <div className='map-container'>
        <div id='map' />
      </div>
    )
  }
}

const getImportConfig = props => {
  const { baseMap, labelDetail, colorTheme } = props
  const baseMapURL = MapData[baseMap].baseURL
  const labelURL = `${MapData[baseMap].attributes.label.baseURL}${labelDetail}${MapData[baseMap].attributes.label.suffixURL}`
  if (baseMap === 'refill') {
    const colorThemeURL = `${MapData[baseMap].attributes.colors.baseURL}${colorTheme}${MapData[baseMap].attributes.colors.suffixURL}`
    return {import: [baseMapURL, labelURL, colorThemeURL]}
  } else {
    return {import: [baseMapURL, labelURL]}
  }
}

const mapStateToProps = state => ({
  ...state
})

const FilteredMap = connect(
  mapStateToProps
)(Map)

export default FilteredMap
