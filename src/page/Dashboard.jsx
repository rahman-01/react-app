import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Cpu, 
  Radar, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  Search,
  ChevronRight
} from 'lucide-react'; // Pastikan install lucide-react: npm install lucide-react

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Market');
  const navigate = useNavigate();

  const menus = [
    { name: 'Market', icon: <TrendingUp size={20} />, color: 'text-emerald-400' },
    { name: 'Ai Signal', icon: <Cpu size={20} />, color: 'text-indigo-400' },
    { name: 'Whale Detector', icon: <Radar size={20} />, color: 'text-amber-400' },
    { name: 'Overview', icon: <LayoutDashboard size={20} />, color: 'text-slate-400' },
  ];

  const handleLogout = () => {
    if(confirm("Apakah anda yakin ingin keluar?")) {
      navigate('/login');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className={`
        ${isSidebarOpen ? 'w-64' : 'w-20'} 
        fixed inset-y-0 left-0 z-50 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 flex items-center justify-between">
            {isSidebarOpen && (
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                CRYPTO SIGNAL  PRO
              </span>
            )}
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 space-y-2 mt-4">
            {menus.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`
                  w-full flex items-center p-3 rounded-xl transition-all duration-200 group
                  ${activeMenu === item.name 
                    ? 'bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.1)]' 
                    : 'hover:bg-slate-800/50 text-slate-400'}
                `}
              >
                <span className={`${activeMenu === item.name ? item.color : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {item.icon}
                </span>
                {isSidebarOpen && <span className="ml-4 font-medium whitespace-nowrap">{item.name}</span>}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-slate-800">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center p-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors group"
            >
              <LogOut size={20} />
              {isSidebarOpen && <span className="ml-4 font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-2 w-96">
            <Search size={18} className="text-slate-500" />
            <input type="text" placeholder="Search signals..." className="bg-transparent border-none outline-none ml-3 text-sm w-full" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-white transition">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none">Admin User</p>
                <p className="text-xs text-emerald-400 mt-1 uppercase tracking-tighter">Pro Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-slate-700 shadow-lg flex items-center justify-center font-bold text-white">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{activeMenu}</h1>
              <p className="text-slate-500 mt-1 italic">Real-time data and advanced analytics.</p>
            </div>
            <div className="text-sm text-slate-400">
              Last updated: <span className="text-slate-200">Just now</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'BTC Price', val: '$96,402.21', change: '+2.4%', up: true },
              { label: 'Active Signals', val: '128', change: 'New 12', up: true },
              { label: 'Whale Activity', val: 'High', change: '8 Large', up: false },
              { label: 'AI Accuracy', val: '94.2%', change: '+1.2%', up: true },
            ].map((card, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                <p className="text-slate-500 text-sm font-medium">{card.label}</p>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-2xl font-bold text-white">{card.val}</h3>
                  <span className={`text-xs px-2 py-1 rounded-lg font-bold ${card.up ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {card.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Section */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 mb-4 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
               <TrendingUp size={32} />
            </div>
            <h2 className="text-xl font-bold text-white">Modul {activeMenu} Sedang Memuat...</h2>
            <p className="text-slate-500 max-w-sm mt-2">Kami sedang menghubungkan sistem AI dengan data market real-time. Harap tunggu beberapa saat.</p>
            <button className="mt-6 flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition group">
              Lihat Detail <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;