import React from 'react'

const DropdownController = ({label, options, onChangeAction}) => {
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
