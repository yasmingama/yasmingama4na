// src/services/authService.ts
import { UserRepository } from '../repositories/userRepository';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository();
const JWT_SECRET = process.env.JWT_SECRET || 'secreta'; // Use variável de ambiente

export class AuthService {
    async registerUser(name: string, email: string, password: string): Promise<User> {
        const userExists = await userRepository.getUserByEmail(email);
        if (userExists) throw new Error('Usuário já existe');

        const passwordHash = await bcrypt.hash(password, 10);
        return await userRepository.addUser(name, email, passwordHash);
    }

    async loginUser(email: string, password: string): Promise<{ user: User; token: string }> {
        const user = await userRepository.getUserByEmail(email);
        if (!user) throw new Error('Usuário não encontrado');

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) throw new Error('Senha inválida');

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    }
}