import React from 'react'
import Home from './Pages/Home'
import HackathoneForm from './Pages/HackathoneForm'
import { Route,Routes } from 'react-router-dom'
import Info from './Pages/Info'


function App() {
  return (
    <div>
      <Routes>   
        <Route path={'/'} element={<Home/>} />
        <Route path={'/HackathoneForm'} element={<HackathoneForm/>} />
        <Route path="/hackathon-info" element={<Info />} />
        

</Routes>
 

    </div>
  )
}

export default App
