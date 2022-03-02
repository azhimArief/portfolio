import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro.jsx";
import Contact from "./components/contact/Contact.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Works from "./components/works/Works.jsx";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
