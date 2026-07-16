const TMDB_API_KEY = '98215a8e51a12f3bb2d627e496673e31'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export async function getMoviePoster(title, year) {
  try {
    // Try movies first
    const movieRes = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
    )
    const movieData = await movieRes.json()
    if (movieData.results && movieData.results.length > 0) {
      const poster = movieData.results[0].poster_path
      if (poster) return `${TMDB_IMAGE_BASE}${poster}`
    }

    // If no movie found, try TV series
    const tvRes = await fetch(
      `${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&first_air_date_year=${year}`
    )
    const tvData = await tvRes.json()
    if (tvData.results && tvData.results.length > 0) {
      const poster = tvData.results[0].poster_path
      if (poster) return `${TMDB_IMAGE_BASE}${poster}`
    }

    return null
  } catch (error) {
    return null
  }
}