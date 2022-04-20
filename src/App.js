import './styles/main.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Logos from './components/Logos'

import React from 'react';


function App() {

  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <About />
        <Logos />
      </main>
      <Footer />
    </>
  )
}

export default App