import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ProposalPage from './pages/ProposalPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/proposal" element={<ProposalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
