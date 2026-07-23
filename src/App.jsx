import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trivia from './components/Trivia'
import Collections from './components/Collections'
import Footer from './components/Footer'
import ToonzHub from './pages/ToonzHub.jsx'
import ToonzSeries from './pages/ToonzSeries.jsx'
import FAQs from './pages/FAQs.jsx'
import TopPicks from './pages/TopPicks.jsx'
import DisneyPage from './pages/DisneyPage.jsx'
import NetflixPage from './pages/NetflixPage.jsx'
import DreamWorksPage from './pages/DreamWorksPage.jsx'
import PixarPage from './pages/PixarPage.jsx'
import TwentiethPage from './pages/TwentiethPage.jsx'
import IlluminationPage from './pages/IlluminationPage.jsx'
import Shop from './pages/Shop.jsx'
import SeriesPage from './pages/SeriesPage.jsx'
import SeriesDetail from './pages/SeriesDetail.jsx'

function App() {
  const [page, setPage] = useState('home')
  const [selectedSeries, setSelectedSeries] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const navigateToSeries = (series) => {
    setSelectedSeries(series)
    setPage('series-detail')
  }

return (
    <div>
      <Header setPage={setPage} />
      {page === 'home' && (
        <>
          <Hero setPage={setPage} />
          <Trivia />
          <Collections />
        </>
      )}
      {page === 'shop' && <Shop />}
      {page === 'toonzhub' && <ToonzHub setPage={setPage} />}
      {page === 'toonzseries' && <ToonzSeries setPage={setPage} navigateToSeries={navigateToSeries} />}
      {page === 'faqs' && <FAQs />}
      {page === 'toppicks' && <TopPicks />}
      {page === 'collections' && (
        <>
          <Hero setPage={setPage} />
          <Collections />
        </>
      )}
      {page === 'disney' && <DisneyPage />}
      {page === 'netflix' && <NetflixPage />}
      {page === 'dreamworks' && <DreamWorksPage />}
      {page === 'pixar' && <PixarPage />}
      {page === 'twentieth' && <TwentiethPage />}
      {page === 'illumination' && <IlluminationPage />}
      {page === 'netflix-series' && <SeriesPage category="Netflix Series" setPage={setPage} navigateToSeries={navigateToSeries} />}
      {page === 'korean-series' && <SeriesPage category="Korean Series" setPage={setPage} navigateToSeries={navigateToSeries} />}
      {page === 'japanese-series' && <SeriesPage category="Japanese Series" setPage={setPage} navigateToSeries={navigateToSeries} />}
      {page === 'series-detail' && <SeriesDetail series={selectedSeries} setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App