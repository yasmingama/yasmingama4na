// parte do servidor onde autentica tantos os livros quanto os usuários
// src/server.ts

import express from 'express';
import cors from 'cors'; // Importando CORS
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes'; // Certifique-se de ter este arquivo

const app = express();
const PORT = process.env.PORT || 3000; // Certifique-se de que isso está definido corretamente

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json()); // Para analisar JSON no corpo das requisições
app.use('/api', bookRoutes); // Registre suas rotas de livro
app.use('/auth', authRoutes); // Adicione a barra antes de 'auth'

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});