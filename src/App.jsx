import React, { useState } from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm'
import About from './About'

const App = () => {

let [mode, setMode]= useState("light"); //whether dark mode is enabled or not

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
  }
}

  return (
    <>
    {/* 1-Navbar */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyse" mode={mode}/>
    </div>







    {/* 2-About */}
    <div className='container my-3'>
    <About/>
    </div>
    </>
  )
}

export default App