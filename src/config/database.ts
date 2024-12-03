import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,          // Nome de usuário do banco de dados
    host: process.env.DB_HOST,          // Endereço do host do banco de dados
    database: process.env.DB_DATABASE,  // Nome do banco de dados
    password: process.env.DB_PASSWORD,  // Senha do banco de dados
    port: Number(process.env.DB_PORT),  // Porta do banco de dados
});

// Testa a conexão ao banco de dados
pool.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));

export default pool;