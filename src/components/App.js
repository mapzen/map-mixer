import React, { Component } from 'react'

import Map from './Map'
import ControllerPanel from './Controllers/ControllerPanel'
import CodePanel from './CodePanel'

class App extends Component {
  render () {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Map />
        <ControllerPanel />
        <CodePanel />
      </div>
    )
  }
}

export default App
