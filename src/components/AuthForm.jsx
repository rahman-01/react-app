import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthInput = ({ label, type, placeholder, value, onChange, required, hint }) => (
  <div>
    <label className="block text-sm font-medium text-slate-300 mb-2">
      {label} {hint && <span className="text-xs text-slate-500 font-normal">({hint})</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-slate-600"
    />
  </div>
);

const AuthForm = ({ mode = "login" }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAuth = (e) => {
    e.preventDefault();
    console.log(`Mencoba ${isLogin ? 'Login' : 'Daftar'} dengan:`, formData);

    // Simulasi Testing Lokal
    if (formData.email === "admin@test.com" && formData.password === "123456") {
      alert("Akses Berhasil! Mengalihkan ke Dashboard...");
      navigate('/crypto');
    } else {
      alert("Email atau Password salah! (Gunakan: admin@test.com / 123456)");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      {/* Dekorasi Background Bulat Halus */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div 
        data-aos="zoom-in"
        className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Selamat Datang' : 'Buat Akun'}
          </h2>
          <p className="text-slate-400 text-sm italic">
            {isLogin ? 'Gunakan admin@test.com / 123456' : 'Daftar untuk akses API gratis'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleAuth}>
          {!isLogin && (
            <AuthInput 
              label="Nama Lengkap" 
              type="text" 
              placeholder="John Doe" 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <AuthInput 
            label="Alamat Email" 
            type="email" 
            placeholder="name@company.com" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              {isLogin && <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300">Lupa password?</button>}
            </div>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95 transform"
          >
            {isLogin ? 'Masuk Sekarang' : 'Daftar Akun'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} 
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-400 font-semibold hover:underline transition"
            >
              {isLogin ? 'Daftar di sini' : 'Login di sini'}
            </button>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
            <hr className="w-full border-slate-800" />
            <span className="text-slate-500 text-xs whitespace-nowrap uppercase tracking-widest">Or</span>
            <hr className="w-full border-slate-800" />
        </div>

        <button 
          type="button"
          className="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition active:scale-[0.98]"
        >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
            <span className="text-sm font-medium">Lanjut dengan Google</span>
        </button>
      </div>
    </section>
  );
};

export default AuthForm;