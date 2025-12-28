const Pricing = () => {
  const plans = [
    { name: "Free", price: "0", features: ["1,000 Requests/day", "Public API Access", "Community Support"], recommended: false },
    { name: "Pro", price: "29", features: ["100,000 Requests/day", "Private API Keys", "Priority Email Support", "Real-time Webhooks"], recommended: true },
    { name: "Enterprise", price: "99", features: ["Unlimited Requests", "Dedicated Server", "24/7 Phone Support", "Custom Integration"], recommended: false }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pilih Paket Anda</h2>
        <p className="text-slate-400 mb-12">Skalakan bisnis Anda dengan infrastruktur API terbaik.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${plan.recommended ? 'border-indigo-500 bg-slate-900 shadow-xl shadow-indigo-500/10' : 'border-slate-800 bg-slate-950'} transition-all hover:-translate-y-2`}>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">${plan.price}<span className="text-lg text-slate-500 font-normal">/bln</span></div>
              <ul className="text-slate-400 space-y-4 mb-8 text-left text-sm">
                {plan.features.map((f, i) => <li key={i}>✓ {f}</li>)}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition ${plan.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;