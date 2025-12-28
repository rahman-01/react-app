import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, TrendingUp, Cpu, Radar, LogOut, 
  Menu, X, Bell, Search, ChevronRight 
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // --- 1. STATES ---
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Market');
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // --- 2. API LOGIC (Mengambil 20 Koin Teratas) ---
  const fetchMarketData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      const data = await response.json();
      setCryptoData(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000); // Auto-refresh 60 detik
    return () => clearInterval(interval);
  }, []);

  // --- 3. FILTER LOGIC (Aman dari Bug Undefined) ---
  const filteredCoins = cryptoData?.filter(coin => 
    coin?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    coin?.symbol?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // --- 4. NAVIGATION DATA ---
  const menus = [
    { name: 'Market', icon: <TrendingUp size={20} />, color: 'text-emerald-400' },
    { name: 'Ai Signal', icon: <Cpu size={20} />, color: 'text-indigo-400' },
    { name: 'Whale Detector', icon: <Radar size={20} />, color: 'text-amber-400' },
    { name: 'Overview', icon: <LayoutDashboard size={20} />, color: 'text-slate-400' },
  ];

  const handleLogout = () => {
    if(confirm("Apakah anda yakin ingin keluar?")) navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} fixed inset-y-0 left-0 z-50 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 transition-all duration-300`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            {isSidebarOpen && <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">CRYPTO PRO</span>}
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700">
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-2 mt-4">
            {menus.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`w-full flex items-center p-3 rounded-xl transition-all ${activeMenu === item.name ? 'bg-indigo-600/10 border border-indigo-500/20 text-indigo-400' : 'hover:bg-slate-800/50 text-slate-400'}`}
              >
                <span className={activeMenu === item.name ? item.color : 'text-slate-500'}>{item.icon}</span>
                {isSidebarOpen && <span className="ml-4 font-medium">{item.name}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button onClick={handleLogout} className="w-full flex items-center p-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors">
              <LogOut size={20} />
              {isSidebarOpen && <span className="ml-4 font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* HEADER DENGAN SEARCH BAR */}
        <header className="h-20 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-2 w-96">
            <Search size={18} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Search assets (BTC, ETH...)" 
              className="bg-transparent border-none outline-none ml-3 text-sm w-full text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-6">
             <Bell size={22} className="text-slate-400 cursor-pointer" />
             <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold uppercase border border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.4)]">AD</div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{activeMenu}</h1>
              <p className="text-slate-500 mt-1 italic font-light">Real-time market analytics powered by CoinGecko.</p>
            </div>
          </div>

          {/* MARKET TABLE */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Coin</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">24h Change</th>
                    <th className="p-4">Market Cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {loading ? (
                    <tr><td colSpan="4" className="p-20 text-center text-indigo-400 animate-pulse">Fetching 20 top assets...</td></tr>
                  ) : filteredCoins.length > 0 ? (
                    filteredCoins.map((coin) => (
                      <tr key={coin.id} className="hover:bg-slate-800/30 transition-colors group">
                        <td className="p-4 flex items-center gap-3">
                          <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="font-bold text-white uppercase text-sm">{coin.symbol}</p>
                            <p className="text-[10px] text-slate-500">{coin.name}</p>
                          </div>
                        </td>
                        <td className="p-4 font-mono text-sm">${coin.current_price.toLocaleString()}</td>
                        <td className={`p-4 text-sm font-bold ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {coin.price_change_percentage_24h?.toFixed(2)}%
                        </td>
                        <td className="p-4 text-slate-500 text-sm">${(coin.market_cap / 1e9).toFixed(2)}B</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="4" className="p-10 text-center text-slate-500 uppercase text-xs tracking-widest">No assets found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;