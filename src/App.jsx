import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Import Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. Import Semua Komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// 3. Deklarasi LandingPage (CUKUP SATU KALI SAJA)
const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

// 4. Komponen Utama App
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden font-sans bg-slate-950 text-slate-200">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/crypto" 
            element={
              <div className="pt-32 min-h-screen flex items-center justify-center bg-slate-900">
                <h2 className="text-3xl font-bold text-white">Dashboard Market Crypto</h2>
              </div>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;