import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hello";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


export default function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
