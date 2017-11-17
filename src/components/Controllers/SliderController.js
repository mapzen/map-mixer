import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

let Controller = ({label, min, max, value, onChangeAction, dispatch}) => {
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
          dispatch(onChangeAction(input.value))
        }} />
    </div>
  )
}

Controller.propTypes = {
  onChangeAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

Controller = connect()(Controller)

export default Controller
