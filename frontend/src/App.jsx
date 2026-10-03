import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checker from "./pages/Checker";
import Results from "./pages/Results";
import About from "./pages/About";
import HowItWorksPage from "./pages/HowItWorksPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/checker"
          element={<Checker />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorksPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;