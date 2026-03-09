import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Projects from './Pages/Projects'
import Contactspg from './Pages/Contactspg'
import ProjectD from './Pages/ProjectD'
import { projects } from './Pages/PrjData'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contactspg />} />
        <Route path='/aavas'  element={<ProjectD project={projects.avass} />}/>
        <Route path='/siruvapuri'  element={<ProjectD project={projects.siruvapuri} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App