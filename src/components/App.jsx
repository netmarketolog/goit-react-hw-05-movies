import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./Pages/Movies/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./Pages/Movies/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Movies/Reviews/Reviews'));

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
