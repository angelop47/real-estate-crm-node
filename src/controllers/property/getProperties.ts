import { Request, Response } from 'express';
import { supabase } from '../../config/supabase';

export const getProperties = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('properties')
            .select('*');

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
