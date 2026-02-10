import { useState } from 'react'
import './App.css'
import NavBar from './layout/NavBar'
import { Route, Routes } from 'react-router-dom'


import React from 'react'
import Home from './page/Home'
import { About } from './page/About'
import Contact from './page/Contact'
import Services from './page/Services'

export const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
    
  )
}



export default App
