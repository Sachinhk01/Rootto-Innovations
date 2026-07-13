import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <> 
  <Navbar />
  <main>
    <Hero />
    <About />
    <Services />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
  <Footer />
  <FloatingActions />
    </>
  );
}

export default App;