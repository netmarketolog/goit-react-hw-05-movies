import axios from 'axios';

const API_KEY = '?api_key=8fa17eefa9c2b424e1a30217c39bc412';
const URL = 'https://api.themoviedb.org/3/';

export async function trendingFilm() {
  const url = `${URL}trending/movie/day${API_KEY}`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmList = await data.results;

  return filmList;
}
export async function searchMovies(searchQuery) {
  const url = `${URL}search/movie${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  const response = await axios.get(url);
  const data = await response.data;
  const filmList = await data.results;

  return { filmList, data };
}

export async function movieDetails(movieId) {
  const url = `${URL}movie/${movieId}${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  const data = await response.data;

  return data;
}

export async function movieCast(movieId) {
  const url = `${URL}movie/${movieId}/credits${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  const data = await response.data;
  const cast = await data.cast;

  return cast;
}

export async function movieReviews(movieId) {
  const url = `${URL}movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  const data = await response.data;
  const filmList = await data.results;

  return filmList;
}
