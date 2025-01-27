import axios from 'axios';

async function checkConnection() {
  const url = 'https://animefire.plus'; // Substitua pelo URL correto
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      }
    });
    console.log('Conectado ao site com sucesso!');
    console.log('Status da resposta:', response.status);
  } catch (error) {
    console.error('Erro ao tentar se conectar ao site:', error.response ? error.response.status : error.message);
  }
}

checkConnection();
