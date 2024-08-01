import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { MovieCast } from "./components/MovieCast/MovieCast";
import { MovieReviews } from "./components/MovieReviews/MovieReviews";
import { Navigation } from "./components/Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

// API read access token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw
//API Key: 0c7aa39ad6b27cbd2a666935699646eb
