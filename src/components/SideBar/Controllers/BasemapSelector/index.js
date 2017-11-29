import React from 'react'
import BasemapOption from './BasemapOption'
import './BasemapSelector.css'

const getBaseMapOptions = (basemapArray, currentMap, onChangeAction) => {
  let basemapOptionComponents = []

  basemapArray.map((basemap, i) => {
    basemapOptionComponents.push(
      <BasemapOption
        basemap={basemap}
        currentMap={currentMap}
        onChangeAction={onChangeAction}
        key={i} />
    )
  })
  return basemapOptionComponents
}

const BasemapSelector = ({label, basemapOptions, currentMap, onChangeAction}) => {
  const bOptions = getBaseMapOptions(basemapOptions, currentMap, onChangeAction)

  return (
    <div className='mt-3 row'>
      <div className='col-xs-12'>
        <label>
          {label}
        </label>
      </div>
      {bOptions.map((MatchingComponent, i) => MatchingComponent)}
    </div>
  )
}

export default BasemapSelector
