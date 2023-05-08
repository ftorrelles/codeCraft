import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./compenents/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import WhyUs from "./pages/WhyUs";
import Footer from "./compenents/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/whyUs" element={<WhyUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
