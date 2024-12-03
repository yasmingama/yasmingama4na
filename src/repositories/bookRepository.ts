// src/repositories/bookRepository.ts
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
    async getAllBooks(): Promise<Book[]> {
        const { rows } = await pool.query('SELECT * FROM books');
        return rows;
    }

    async addBook(title: string, subtitle?: string, image?: string, price?: number): Promise<Book> {
        // Adicione validação aqui se necessário
        const query = 'INSERT INTO books (title, subtitle, image, price) VALUES ($1, $2, $3, $4) RETURNING *';
        const { rows } = await pool.query(query, [title, subtitle || null, image || null, price]);
        return rows[0];
    }

    async updateBook(id: number, title: string, subtitle?: string, image?: string, price?: number): Promise<Book | null> {
        // Adicione validação aqui se necessário
        const query = `
            UPDATE books 
            SET title = $1, subtitle = $2, image = $3, price = $4 
            WHERE id = $5 
            RETURNING *`;
        const { rows } = await pool.query(query, [title, subtitle || null, image || null, price, id]);
        return rows[0] || null;
    }

    async deleteBook(id: number): Promise<boolean> {
        const result = await pool.query('DELETE FROM books WHERE id = $1', [id]);
        return result.rowCount > 0; // Retorna true se a linha foi deletada
    }
}