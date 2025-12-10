import { Request, Response } from 'express';
import { supabase } from '../../config/supabase';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../models/user';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, passwordHash, role, isActive } = req.body;

        const newUser: User = {
            id: uuidv4(),
            name,
            email,
            passwordHash, // Note: In a real app, hash this before saving!
            role: role || 'agent',
            isActive: isActive !== undefined ? isActive : true,
            createdAt: new Date()
        };

        const { data, error } = await supabase
            .from('users')
            .insert([newUser])
            .select();

        if (error) {
            throw error;
        }

        res.status(201).json(data[0]);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
