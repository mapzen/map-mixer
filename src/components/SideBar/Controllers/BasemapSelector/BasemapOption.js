import React from 'react'
import './BasemapOption.css'

const BasemapOption = ({ basemap, currentMap, onChangeAction }) => {
  let input
  const checked = (basemap === currentMap) ? 'checked' : ''
  return (
    <div className='col-xs-4'>
      <input
        className='basemap-radio'
        type='radio'
        id={basemap}
        name='basemap-option'
        checked={checked}
        ref={node => { input = node }}
        onChange={e => { onChangeAction(input.value) }}
        value={basemap} />
      <label
        htmlFor={basemap}
        className='basemap-card' />
      <span>
        { basemap }
      </span>
    </div>
  )
}

export default BasemapOption
