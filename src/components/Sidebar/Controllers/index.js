import React from 'react'
import { connect } from 'react-redux'

import DropdownController from './DropdownController'
import SliderController from './SliderController'
import BasemapSelector from './BasemapSelector'

const getArrayWithObject = (obj) => {
  let keys = []
  for (const keyName in obj) keys.push(keyName)
  return keys
}

function getController (props) {
  let components = []
  const { currentBaseMap, currentLabel, currentColor, changeLabelDetailValue, changeColorThemeValue } = props
  
    if (currentBaseMap.title === 'refill') {
      components.push(
        <DropdownController
          label="color"
          key="color-selector"
          onChangeAction={changeColorThemeValue}
          currentColor={currentColor.value}
          options={currentColor.options}
        />)
    }

    components.push(
      <SliderController
        label="label"
        key="label-selector"
        value={currentLabel.value}
        min={currentLabel.minValue}
        max={currentLabel.maxValue}
        onChangeAction={changeLabelDetailValue}
      />)
  
  return components
}

class ControllerPanel extends React.Component {
  render () {
    const matchingControllers = getController(this.props)
    return (
      <div className='panel col-sm-12'>
        <BasemapSelector
          label='Base Map'
          currentMap={this.props.currentBaseMap}
          basemapOptions={this.props.basemapOptions}
          onChangeAction={this.props.changeBaseMapValue} />
        {matchingControllers.map((Controller) => Controller)}
      </div>
    )
  }
}

export default ControllerPanel