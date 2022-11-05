import React from 'react'
import './style.css';

const InputBox = ({setPage}) => {
  return (
    <div className='input-box' onClick={()=>setPage(3)}>
      <input type="text" className='input' placeholder='People, emails, groups'/>
      <button className='input-btn'>Invite</button>
    </div>
  )
}

export default InputBox
