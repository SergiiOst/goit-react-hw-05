import { Route, Routes } from "react-router-dom";
// import { HomePage } from "./pages/HomePage/HomePage";
// import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
// import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
// import { MovieCast } from "./components/MovieCast/MovieCast";
// import { MovieReviews } from "./components/MovieReviews/MovieReviews";
import { Navigation } from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
// import { MoviesPage } from "./pages/MoviesPage/MoviesPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
