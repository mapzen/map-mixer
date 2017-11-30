import React from 'react'

const DropdownController = (props) => {
  const {label, currentColor, options, onChangeAction} = props
  let input
  return (
    <div className='mt-3 mb-2 row'>
      <div className='col-xs-12'>
        <label> {label} </label>
      </div>
      <div className='col-xs-12'>
        <select
          className='col-xs-12'
          ref={node => { input = node }}
          defaultValue={currentColor}
          onChange={e => { onChangeAction(input.value) }}>
          {options.map(option => (
            <option
              key={option}
              value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DropdownController
