// src/controllers/bookController.ts
import { Request, Response } from 'express';
import axios from 'axios';

// Create - Adicionar livro
export const createBook = async (req: Request, res: Response) => {
    const { title, subtitle, image, price } = req.body;
    try {
        const response = await axios.post('https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro', {
            title,
            subtitle,
            image,
            price: price.toString()
        });

        res.status(201).json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao criar livro:', error.response?.data);
            res.status(error.response?.status || 500).json({ error: error.response?.data });
        } else {
            console.error('Erro desconhecido:', error);
            res.status(500).json({ error: 'Erro ao criar livro' });
        }
    }
};

// Read - Listar todos os livros
export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros');
        console.log('Livros recebidos da API:', response.data); // Log para verificar a resposta
        res.status(200).json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao listar livros:', error.response?.data);
            res.status(error.response?.status || 500).json({ error: error.response?.data });
        } else {
            console.error('Erro desconhecido:', error);
            res.status(500).json({ error: 'Erro ao listar livros' });
        }
    }
};

// Update - Atualizar livro
export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, subtitle, image, price } = req.body;

    try {
        const response = await axios.put(`https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro/${id}`, {
            title,
            subtitle,
            image,
            price: price.toString()
        });

        res.status(200).json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao atualizar livro:', error.response?.data);
            res.status(error.response?.status || 500).json({ error: error.response?.data });
        } else {
            console.error('Erro desconhecido:', error);
            res.status(500).json({ error: 'Erro ao atualizar livro' });
        }
    }
};

// Delete - Deletar livro
export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await axios.delete(`https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro/${id}`);
        res.status(204).send(); // No Content
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao deletar livro:', error.response?.data);
            res.status(error.response?.status || 500).json({ error: error.response?.data });
        } else {
            console.error('Erro desconhecido:', error);
            res.status(500).json({ error: 'Erro ao deletar livro' });
        }
    }
};