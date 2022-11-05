import React from 'react'
import Card from '../Components/Card';
import ShareButton from '../Components/ShareButton';

const SecondPage = ({setPage}) => {
  return (
    <div>
    <ShareButton/>
      <Card setPage={setPage}/>
    </div>
  )
}

export default SecondPage;
