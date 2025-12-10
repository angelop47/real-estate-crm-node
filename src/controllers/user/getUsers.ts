import { Request, Response } from 'express';
import { supabase } from '../../config/supabase';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
