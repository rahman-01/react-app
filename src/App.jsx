import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Library & Global Styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. Static Layout Components (Impor langsung karena selalu muncul)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 3. Page-level Components
// Menggunakan Lazy Loading untuk performa load awal yang lebih cepat
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const AuthForm = lazy(() => import('./components/AuthForm'));

// Komponen LandingPage yang rapi
const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

// Komponen Loading sederhana saat transisi lazy load
const Loading = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center text-indigo-400">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100, // Menghindari animasi trigger terlalu dini
    });
  }, []);

  return (
    <div className="overflow-x-hidden font-sans bg-slate-950 text-slate-200 antialiased">
      <Navbar />
      
      <main>
        {/* Suspense menangani "jeda" saat komponen lazy dimuat */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<AuthForm mode="login" />} />
            <Route path="/register" element={<AuthForm mode="register" />} />
            <Route 
              path="/crypto" 
              element={
                <div className="pt-32 min-h-screen flex items-center justify-center bg-slate-900">
                  <h2 className="text-3xl font-bold text-white">Dashboard Market Crypto</h2>
                </div>
              } 
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;