import React from 'react'

const DropdownController = ({label, options, onChangeAction}) => {
  let input
  return (
    <div className='mt-2 mb-2'>
      <label> {label} </label>
      <select
        ref={node => {
          input = node
        }}
        onChange={e => {
          onChangeAction(input.value)
        }}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default DropdownController
