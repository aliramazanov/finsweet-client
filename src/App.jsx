import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { FAQ } from "./pages/FAQ";
import { Blog } from "./pages/Blog";
import { Features } from "./pages/Features";
import Navigation from "./components/Navigation/Navigation";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes className="routes">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
