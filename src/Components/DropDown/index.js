import React from 'react'

const DropDown = ({className}) => {
  return (
    <div className={className}>
      <select>
        <option value="">Full Access</option>
        <option value="">Can Edit</option>
        <option value="">Can View</option>
        <option value="">No Access</option>
      </select>
    </div>
  )
}

export default DropDown;
