const Features = () => {
  const items = [
    { title: "Ultra Fast", desc: "Respons API dalam hitungan milidetik.", icon: "🚀" },
    { title: "Safe & Secure", desc: "Enkripsi data end-to-end yang terpercaya.", icon: "🛡️" },
    { title: "24/7 Support", desc: "Tim kami siap membantu integrasi Anda.", icon: "💬" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            data-aos="fade-up" 
            data-aos-delay={idx * 150}
            className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;