import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { FAQ } from "./pages/FAQ";
import { Blog } from "./pages/Blog";
import { Features } from "./pages/Features";
import Navigation from "./components/Navigation/Navigation";
import BlogPages from "./components/BlogPages/BlogPages";
import ContactUs from "../src/pages/ContactUs";

import "./App.scss";
import Portfolio from "./pages/Portfolio";
import Template from "./pages/Template";
import ReadBlog from "./pages/ReadBlog";
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes className="routes">
        {/* <Route path="*" element={<Home />} />  Error */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-card" element={<BlogPages />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/template1" element={<Template />} />
        <Route path="/readblog" element={<ReadBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
