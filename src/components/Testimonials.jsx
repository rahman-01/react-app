const Testimonials = () => {
  const reviews = [
    { name: "Alex Rivers", role: "CTO at CryptoNode", text: "Integrasi API tercepat yang pernah saya coba. Cloudflare Worker benar-benar mengubah segalanya.", stars: 5 },
    { name: "Sarah Chen", role: "Fullstack Dev", text: "Dokumentasinya sangat lengkap. Saya bisa live hanya dalam waktu kurang dari 1 jam.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Apa Kata Pengembang?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
              <div className="flex text-yellow-400 mb-4">{"★".repeat(r.stars)}</div>
              <p className="text-slate-600 italic mb-6">"{r.text}"</p>
              <div className="font-bold text-slate-900">{r.name}</div>
              <div className="text-sm text-slate-500">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;