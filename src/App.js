import './App.css';
import React,{useState } from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage'; 
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FiftPage from './pages/FiftPage';

function App() {
  const [page,setPage] = useState(1);
  const [memberInfo,setMemberInfo] = useState({name:""})
  const components = {
    1:<FirstPage setPage = {setPage}/>,
    2:<SecondPage setPage = {setPage}/>,
    3:<ThirdPage setPage = {setPage} memberInfo = {memberInfo} setMemberInfo = {setMemberInfo} />,
    4:<FourthPage setPage = {setPage}  memberInfo = {memberInfo}  setMemberInfo = {setMemberInfo}/>,
    5:<FiftPage setPage = {setPage}  memberInfo = {memberInfo}  setMemberInfo = {setMemberInfo}/>
  }
  return <div className='App'>{components[page]}</div>
}

export default App;
