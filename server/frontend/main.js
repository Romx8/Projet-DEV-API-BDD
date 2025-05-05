document.getElementById('register-btn').addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: document.getElementById('reg-username').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value,
      }),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  });
  
  document.getElementById('login-btn').addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value,
      }),
    });
  
    const data = await res.json();
    if (res.ok) {
      alert('Connecté ✅');
      localStorage.setItem('token', data.token); // pour la suite
    } else {
      alert('Erreur : ' + data.error);
    }
  });
  