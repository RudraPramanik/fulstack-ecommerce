import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>lfkdgl;df</h1>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
