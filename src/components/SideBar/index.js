import React from 'react'
import { connect } from 'react-redux'

import ControllerContainer from './Controllers/ControllerContainer'
import CodePanel from './CodePanel'

import { changeBaseMap, changeLabelDetail, changeColorTheme } from '../store/actions'


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

export default SideBar;