import React from 'react'
import './style.css';
import question from '../../assets/images/question.png'
import copylink from '../../assets/images/copylink.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='questionMark'>
        <img src={question} alt="" className='img-footer'/>
        <p className='questionMark-text'>learn about sharing</p>
      </div>
      <div className='copylink'>
        <img src={copylink} alt="" className='img-footer'/>
        <p className='copylink-text'>Copy link</p>
      </div>
    </div>
  )
}

export default Footer;
