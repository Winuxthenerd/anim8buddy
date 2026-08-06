import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import CollectionDetail from './pages/CollectionDetail.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [highlightMovie, setHighlightMovie] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const setPage = (page) => {
    navigate(page === 'home' ? '/' : `/${page}`)
  }

  const navigateToSeries = (series) => {
    const slug = series.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    setPage(`series-detail/${slug}`)
  }
  const navigateToCollection = (key) => {
  setPage(`collection-detail/${key}`)
  }
  const navigateToMovie = (movie) => {
    setHighlightMovie(movie.title)
    setPage(movie.page)
  }

  return (
    <div>
      <Header setPage={setPage} navigateToSeries={navigateToSeries} navigateToMovie={navigateToMovie} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero setPage={setPage} />
            <Trivia />
            <Collections navigateToCollection={navigateToCollection} />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/toonzhub" element={<ToonzHub setPage={setPage} />} />
        <Route path="/toonzseries" element={<ToonzSeries setPage={setPage} navigateToSeries={navigateToSeries} />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/toppicks" element={<TopPicks />} />
        <Route path="/collections" element={
          <>
            <Hero setPage={setPage} />
            <Collections navigateToCollection={navigateToCollection} />
          </>
        } />
        <Route path="/collection-detail/:collectionKey" element={<CollectionDetail setPage={setPage} />} />
        <Route path="/disney" element={<DisneyPage highlightMovie={highlightMovie} />} />
        <Route path="/netflix" element={<NetflixPage highlightMovie={highlightMovie} />} />
        <Route path="/dreamworks" element={<DreamWorksPage highlightMovie={highlightMovie} />} />
        <Route path="/pixar" element={<PixarPage highlightMovie={highlightMovie} />} />
        <Route path="/twentieth" element={<TwentiethPage highlightMovie={highlightMovie} />} />
        <Route path="/illumination" element={<IlluminationPage highlightMovie={highlightMovie} />} />
        <Route path="/netflix-series" element={<SeriesPage category="Netflix Series" setPage={setPage} navigateToSeries={navigateToSeries} />} />
        <Route path="/korean-series" element={<SeriesPage category="Korean Series" setPage={setPage} navigateToSeries={navigateToSeries} />} />
        <Route path="/japanese-series" element={<SeriesPage category="Japanese Series" setPage={setPage} navigateToSeries={navigateToSeries} />} />
        <Route path="/series-detail/:seriesId" element={<SeriesDetail setPage={setPage} />} />
      </Routes>
      <Footer setPage={setPage} />
      <BackToTop />
    </div>
  )
}

export default App