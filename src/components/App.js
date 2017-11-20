import React, { Component } from 'react'

import Map from './Map'
import SideBar from './SideBar'

import './App.css';

class App extends Component {
  render () {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <SideBar />
        <Map />
      </div>
    )
  }
}

export default App
