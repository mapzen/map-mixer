import React from 'react'
import BasemapOption from './BasemapOption'
import './BasemapSelector.css'

const getBaseMapOptions = (basemapArray, currentMap, onChangeAction) => {
  return basemapArray.map((basemap, i) => {
    return (
      <BasemapOption
        basemap={basemap.title}
        currentMap={currentMap}
        checked = {(basemap.title === currentMap.title) ? 'checked' : ''}
        onChangeAction={onChangeAction}
        basemapID = {basemap.id}
        key={i} />
    )
  })
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
