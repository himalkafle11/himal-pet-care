import "./App.css";
import About from "./components/About/About";
import Client from "./components/Clients/Client";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Services";
import Testimonial from "./components/Testimonials/Testimonial";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Hero />
      <About />
      <Services />
      <Client />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
