import React from 'react'
import './BasemapOption.css'

const BasemapOption = ({ basemap, basemapID, checked, onChangeAction }) => {
  let input
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
        value={basemapID} />
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
