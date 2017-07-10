import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>{'Home'}</h1>
      <Link to="/list/composers">Go to composers list</Link>
    </div>
  )
}

export default Home
