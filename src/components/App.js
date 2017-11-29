import React, { Component } from 'react'

import MapContainer from './MapContainer'
import SideBar from './SideBar'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <SideBar />
        <MapContainer />
      </div>
    )
  }
}

export default App
