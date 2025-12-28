import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-white font-bold text-lg tracking-tight">CRYPTO SIGNAL PRO</div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-indigo-400 transition">Beranda</Link>
          <Link to="/crypto" className="hover:text-indigo-400 transition">Market</Link>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-500 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;