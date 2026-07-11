import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trivia from './components/Trivia'
import Collections from './components/Collections'
import Footer from './components/Footer'
import ToonzHub from './pages/ToonzHub.jsx'
import FAQs from './pages/FAQs.jsx'

function App() {
  const [page, setPage] = useState('home')
  
  useEffect(() => {
    window.scrollTo(0, 0)
      }, [page])

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
      {page === 'faqs' && <FAQs />}
      {page === 'collections' && (
        <>
          <Hero />
          <Collections />
        </>
      )}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App