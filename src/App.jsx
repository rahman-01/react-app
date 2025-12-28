import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Ganti URL ini dengan URL dari terminal Wrangler kamu
    fetch("http://localhost:8787")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Pengguna dari API</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;