import { BrowserRouter, Routes, Route } from "react-router-dom";
import GrandPrixAutoWash from "./components/grand-prix/GrandPrixAutoWash.jsx";
import OwnerReviewsPitch from "./pages/OwnerReviewsPitch.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GrandPrixAutoWash />} />
        {/* Temporary owner-facing pitch; remove route after client call */}
        <Route path="/owner-deck" element={<OwnerReviewsPitch />} />
      </Routes>
    </BrowserRouter>
  );
}
