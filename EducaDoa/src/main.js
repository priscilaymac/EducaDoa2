document.querySelector('#app').innerHTML = `
  <div style="font-family: sans-serif; max-width: 600px; margin: 40px auto;">
    <h1>EducaDoa - Portal da ONG</h1>
    <p>Status da API: <strong id="api-status">Carregando...</strong></p>
    <pre id="api-response" style="background: #f4f4f4; padding: 12px; border-radius: 6px;"></pre>
  </div>
`;

async function checkApiHealth() {
  const statusEl = document.querySelector('#api-status');
  const responseEl = document.querySelector('#api-response');

  try {
    const response = await fetch('/api/health');
    if (!response.ok) throw new Error('Erro na resposta da API');

    const data = await response.json();
    statusEl.textContent = 'Online 🟢';
    statusEl.style.color = 'green';
    responseEl.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    statusEl.textContent = 'Offline 🔴';
    statusEl.style.color = 'red';
    responseEl.textContent = error.message;
  }
}

checkApiHealth();
