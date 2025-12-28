import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { q: "Bagaimana cara mendaftar menjadi pro?", a: "Setelah mendaftar, Anda dapat menemukan Signal Crypto di Dashboard pada bagian pengaturan profil." },
    { q: "Apakah ada batasan permintaan harian?", a: "Untuk paket gratis, batasnya adalah 1.000 permintaan per hari." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left py-4 text-lg font-semibold text-slate-800">
                {f.q} <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="text-slate-600 pb-4">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;