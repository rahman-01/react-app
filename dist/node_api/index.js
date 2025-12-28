const index = {
  async fetch(request, env) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers });
    try {
      const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true";
      const response = await fetch(apiURL);
      const data = await response.json();
      const cryptoData = [
        { id: 1, name: "Bitcoin", symbol: "BTC", price: data.bitcoin.usd, change: data.bitcoin.usd_24h_change },
        { id: 2, name: "Ethereum", symbol: "ETH", price: data.ethereum.usd, change: data.ethereum.usd_24h_change },
        { id: 3, name: "Solana", symbol: "SOL", price: data.solana.usd, change: data.solana.usd_24h_change }
      ];
      return new Response(JSON.stringify(cryptoData), { headers });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Gagal mengambil data market" }), { status: 500, headers });
    }
  }
};
const workerEntry = index ?? {};
export {
  workerEntry as default
};
