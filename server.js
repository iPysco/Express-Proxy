const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite cross-origin requests

app.get('/api', (req, res) => {
  res.json({ message: 'Aoba do servidor Express!' });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
