import React from 'react'
import './style.css';
import share from '../../assets/images/Vector.svg';
const ShareButton = () => {
  return (
    <button className='shareButton'>
      <span>Share</span>
      <img src={share} alt="share" className="share" />
    </button>
  )
}

export default ShareButton;
