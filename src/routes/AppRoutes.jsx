import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;