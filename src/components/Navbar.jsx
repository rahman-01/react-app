import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tight">
          SIGNAL CRYPTO PRO
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-indigo-400 transition">Beranda</Link>
          <Link to="#" className="hover:text-indigo-400 transition">Tentang</Link>
          <Link to="#" className="hover:text-indigo-400 transition">Harga</Link>
          
          {/* PASTIKAN BAGIAN INI MENGGUNAKAN Link to="/login" */}
          <Link 
            to="/login" 
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-500 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;