import axios from 'axios';

const animeUrl = "https://animefire.plus";

async function testConnection() {
  const url = animeUrl; // Defina a URL que você deseja acessar.

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      console.log('Conectado ao site com sucesso!');
      console.log('Status da resposta:', response.status);
    } else {
      console.error('Falha ao se conectar. Status:', response.status);
    }
  } catch (err) {
    console.error('Erro ao tentar se conectar ao site:', err.message);
  }
}

testConnection();
