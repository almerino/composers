import React from 'react'
import AppBar from '../Components/AppBar/AppBar'
import AllRoutes from './Routes/AllRoutes'
import './App.css'

function App() {
  return (
    <div>
      <AppBar />
      <div className="app">
        <AllRoutes />
      </div>
    </div>
  )
}

export default App
