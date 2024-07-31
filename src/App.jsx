import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

// API read access token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw
