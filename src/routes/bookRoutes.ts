// src/routes/bookRoutes.ts
// src/routes/bookRoutes.ts
import { Router } from 'express';
import { getAllBooks, createBook, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

// Rota para listar todos os livros
router.get('/books', getAllBooks);

// Rota para adicionar um novo livro
router.post('/books', createBook);

// Rota para atualizar um livro existente pelo ID
router.put('/books/:id', updateBook);

// Rota para deletar um livro pelo ID
router.delete('/books/:id', deleteBook);

export default router;