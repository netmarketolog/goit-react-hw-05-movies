import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from './Pages/Home/Home';
import Cast from './Pages/Movies/Cast/Cast';
import MovieDetails from './Pages/Movies/MovieDetails/MovieDetails';
import Movies from './Pages/Movies/Movies';
import Reviews from './Pages/Movies/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
