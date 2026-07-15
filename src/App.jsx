import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trivia from './components/Trivia'
import Collections from './components/Collections'
import Footer from './components/Footer'
import ToonzHub from './pages/ToonzHub.jsx'
import FAQs from './pages/FAQs.jsx'
import ToonzSeries from './pages/ToonzSeries.jsx'
import DisneyPage from './pages/DisneyPage.jsx'
import NetflixPage from './pages/NetflixPage.jsx'
import DreamWorksPage from './pages/DreamWorksPage.jsx'
import PixarPage from './pages/PixarPage.jsx'
import TwentiethPage from './pages/TwentiethPage.jsx'
import IlluminationPage from './pages/IlluminationPage.jsx'
import TopPicks from './pages/TopPicks.jsx'

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
      {page === 'toonzhub' && <ToonzHub setPage={setPage} />}
      {page === 'faqs' && <FAQs />}
      {page === 'toonzseries' && <ToonzSeries setPage={setPage} />}
      {page === 'toppicks' && <TopPicks />}
      {page === 'collections' && (
        <>
          <Hero />
          <Collections />
        </>
      )}
      {page === 'disney' && <DisneyPage />}
      {page === 'netflix' && <NetflixPage />}
      {page === 'dreamworks' && <DreamWorksPage />}
      {page === 'pixar' && <PixarPage />}
      {page === 'twentieth' && <TwentiethPage />}
      {page === 'illumination' && <IlluminationPage />}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App