const TMDB_API_KEY = '98215a8e51a12f3bb2d627e496673e31'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export async function getMoviePoster(title, year) {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
    )
    const data = await response.json()
    if (data.results && data.results.length > 0) {
      const poster = data.results[0].poster_path
      if (poster) return `${TMDB_IMAGE_BASE}${poster}`
    }
    return null
  } catch (error) {
    return null
  }
}