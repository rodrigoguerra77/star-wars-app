import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} className='App-logo' alt='Star Wars' />
        <Link to='/characters'>Ver Personajes</Link>
        <p>Desarrollado por <a href='https://github.com/rodrigoguerra77' target='_blank'  rel='noopener noreferrer'>Rodrigo Guerra</a></p>
      </header>
    </div>
  )
}

export default Home