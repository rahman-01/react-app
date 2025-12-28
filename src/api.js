export default {
  async fetch(request) {
    // Mengambil data dari API Eksternal
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*" // PENTING: Agar bisa diakses oleh React (CORS)
      },
    });
  },
};