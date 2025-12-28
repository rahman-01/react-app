import { Link } from 'react-router-dom';

const Navbar = () => {
  // 1. Data menu dipisah agar kode utama lebih bersih
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '#' },
    { name: 'Harga', path: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-lg tracking-tight hover:opacity-90 transition-opacity">
          SIGNAL CRYPTO PRO
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Action Button */}
          <Link 
            to="/login" 
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-500 transition-all duration-200 active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;