import React, { useContext } from 'react'
import Home from './pages/Home/Home.jsx'
import Aboutme from './pages/Aboutme/Aboutme.jsx'
import Myservices from './pages/Services/Myservices.jsx'
import Mywork from './pages/Mywork/Mywork.jsx'
import Getintouch from './pages/Getintouch/Getintouch.jsx'

const App = () => {

  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
  },false);
  
  return (
    <div className='app-container'>
      <Home/>
      <Aboutme/>
      <Myservices/>
      <Mywork/>
      <Getintouch/>
    </div>
  )
}

export default App
