import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Library & Global Styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. Static Components (Cepat di-load)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './page/Dashboard'; // Pastikan nama folder 'page' sesuai

// 3. Lazy Loaded Components (Optimasi Performa)
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const AuthForm = lazy(() => import('./components/AuthForm'));

// Komponen Pembungkus: Memberikan Navbar & Footer ke halaman publik
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// Gabungan Section Landing Page
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

// Loading State saat transisi Lazy Load
const Loading = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden font-sans bg-slate-950 text-slate-200 antialiased">
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* RUTE LANDING PAGE (Pakai Navbar & Footer) */}
          <Route path="/" element={
            <PublicLayout>
              <LandingPage />
            </PublicLayout>
          } />

          {/* RUTE AUTH (Pakai Navbar & Footer) */}
          <Route path="/login" element={
            <PublicLayout>
              <AuthForm mode="login" />
            </PublicLayout>
          } />
          
          <Route path="/register" element={
            <PublicLayout>
              <AuthForm mode="register" />
            </PublicLayout>
          } />

          {/* RUTE DASHBOARD (Bersih tanpa Navbar Landing Page) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crypto" element={<Dashboard />} />
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;