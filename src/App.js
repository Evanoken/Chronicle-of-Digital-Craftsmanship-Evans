import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About id="about" />
      <Experience id="experience" />
      <Skills />
      <Portfolio id="portfolio" />
      <Blog id="blog" />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;