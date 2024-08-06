const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/receber-dados', (req, res) => {
    const { name, email, password, cpf } = req.body;
    
    // Processa os dados (por exemplo, salva em um banco de dados ou envia um email)
    console.log('Dados recebidos:', { name, email, password, cpf });

    // Envia uma resposta de sucesso
    res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
