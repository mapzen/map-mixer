import React from 'react'

import ControllerContainer from './ControllerContainer'
import CodePanel from './CodePanel'

class SideBar extends React.Component {
  render () {
    return (
      <div className='sidebar-container'>
        <ControllerContainer />
        <CodePanel />
      </div>
    )
  }
}

export default SideBar
