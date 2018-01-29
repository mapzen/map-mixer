import React, { Component } from 'react'

import MapContainer from './MapContainer'
import SidebarContainer from './SidebarContainer'

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <h1> dumb text climb</h1>
        <MapContainer />
        <SidebarContainer />
      </div>
    )
  }
}

export default App
