import React from 'react'
import ShareButton from '../Components/ShareButton'

const FirstPage = ({setPage}) => {
  return (
    <div onClick={()=>setPage(2)}>
      <ShareButton/>
    </div>
  )
}

export default FirstPage
