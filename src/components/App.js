import React, { Component } from 'react'

import Map from './Map'
import SideBar from './SideBar'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <SideBar />
        <Map />
      </div>
    )
  }
}

export default App
