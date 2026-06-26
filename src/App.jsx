import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Scroll2top from "./components/Scroll2top.jsx";

import Hero from "./layouts/Hero.jsx";
import Product from "./layouts/Project.jsx";
import Link from "./layouts/Link.jsx";
import Testimonial from "./layouts/Testimonial.jsx";
import Journey from "./layouts/Journey.jsx";
import Blog from "./layouts/Blog.jsx";
import Contact from "./layouts/Contact.jsx";

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      window.history.replaceState(null, "", redirectPath);
    }
  }, []);
  return (
    <>
      <Header />
      <Scroll2top />
      <Hero />
      <Product />
      <Link />
      <Journey />
      <Testimonial />
      {<Blog />}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
