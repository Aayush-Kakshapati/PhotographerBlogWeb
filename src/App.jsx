import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="w-full md:w-[900px] bg-white text-gray-900 font-sans mx-auto">
      <Router>
        <div className="w-full md:w-[900px] flex flex-col bg-white text-gray-900 mx-auto">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
