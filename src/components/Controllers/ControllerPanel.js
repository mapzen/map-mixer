import React from 'react'
import { connect } from 'react-redux'

import DropdownController from './DropdownController'
import SliderController from './SliderController'

import MapData from '../../static/mapzen-maps'

import { changeBaseMap, changeLabelDetail, changeColorTheme } from '../store/actions'

const getArrayWithObject = (obj) => {
  let keys = []
  for (const keyName in obj) keys.push(keyName)
  return keys
}

function getController (baseMap, labelDetail) {
  let components = []
  let keyCount = 0
  for (const attr in MapData[baseMap].attributes) {
    if (MapData[baseMap].attributes[attr].type === 'select') {
      components.push(
        <DropdownController
          label={attr}
          key={keyCount}
          onChangeAction={changeColorTheme}
          options={getArrayWithObject(MapData[baseMap].attributes[attr].values)}
        />)
    } else if (MapData[baseMap].attributes[attr].type === 'range') {
      components.push(
        <SliderController
          label={attr}
          key={keyCount}
          value={labelDetail}
          min={MapData[baseMap].attributes[attr].minValue}
          max={MapData[baseMap].attributes[attr].maxValue}
          onChangeAction={changeLabelDetail}
        />)
    }
    keyCount++
  }
  return components
}

class ControllerPanel extends React.Component {
  render () {
    const matchingControllers = getController(this.props.baseMap, this.props.labelDetail)
    return (
      <div className='panel col-sm-4'>
        <DropdownController
          label='Base Map'
          options={getArrayWithObject(MapData)}
          onChangeAction={changeBaseMap} />
        {matchingControllers.map((MatchingComponent, i) => MatchingComponent)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    baseMap: state.baseMap,
    labelDetail: state.labelDetail,
    colorTheme: state.colorTheme
  }
}

export default connect(mapStateToProps)(ControllerPanel)
