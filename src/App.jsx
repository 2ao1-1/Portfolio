import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoiseBackground } from "./layout/NoiseBackground";
import Index from "./pages/Index";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      {/* <NoiseBackground patternSize={500} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
