// src/controllers/authController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { isValidEmail } from '../helpers/validationHelper';

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
    }

    try {
        const user = await authService.registerUser(name, email, password);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }

    try {
        const { user, token } = await authService.loginUser(email, password);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(401).json({ error: (err as Error).message });
    }
};