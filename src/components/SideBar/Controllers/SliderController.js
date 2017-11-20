import React from 'react'
import PropTypes from 'prop-types'

const SliderController = ({label, min, max, value, onChangeAction}) => {
  let input
  return (
    <div className='mt-2 mb-2'>
      <label> {label} </label>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        step='1'
        ref={node => {
          input = node
        }}
        onChange={e => {
          onChangeAction(input.value)
        }} />
    </div>
  )
}

export default SliderController
