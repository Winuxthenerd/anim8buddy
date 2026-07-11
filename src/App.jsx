import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trivia from './components/Trivia'
import Collections from './components/Collections'
import Footer from './components/Footer'
import ToonzHub from './pages/ToonzHub.jsx'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      <Header setPage={setPage} />
      {page === 'home' && (
        <>
          <Hero />
          <Trivia />
          <Collections />
        </>
      )}
      {page === 'toonzhub' && <ToonzHub />}
      <Footer />
    </div>
  )
}

export default App