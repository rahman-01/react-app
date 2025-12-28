const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      {/* Efek Cahaya Halus di Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_50%)]"></div>
      
      <div className="max-w-4xl text-center z-10">
        <h1 
          data-aos="fade-down" 
          className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 tracking-tight"
        >
          Solusi Para Trader <br />
          <span className="text-indigo-400">Ekosistem Crypto Digital</span>
        </h1>

        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Signal Cryptocurrency dengan Signal Pro dan Ai.
        </p>

        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-300 hover:scale-105 active:scale-95">
            Mulai Gratis
          </button>
          <button className="px-8 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95">
            Dokumentasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;