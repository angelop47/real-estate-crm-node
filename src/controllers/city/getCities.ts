import { Request, Response } from 'express';
import { supabase } from '../../config/supabase';

export const getCities = async (req: Request, res: Response) => {
    try {
        const { departmentId } = req.query;

        let query = supabase.from('cities').select('*');

        if (departmentId) {
            query = query.eq('departmentId', departmentId);
        }

        const { data, error } = await query;

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
