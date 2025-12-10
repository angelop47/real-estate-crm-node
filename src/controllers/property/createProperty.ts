import { Request, Response } from 'express';
import { supabase } from '../../config/supabase';
import { v4 as uuidv4 } from 'uuid';
import { Property } from '../../models/property';

export const createProperty = async (req: Request, res: Response) => {
    try {
        const { title, description, price, cityId, departmentId, bedrooms, bathrooms, squareFeet, images } = req.body;

        const newProperty: Property = {
            id: uuidv4(),
            title,
            description,
            price,
            cityId,
            departmentId,
            bedrooms,
            bathrooms,
            squareFeet,
            images: images || []
        };

        const { data, error } = await supabase
            .from('properties')
            .insert([newProperty])
            .select();

        if (error) {
            throw error;
        }

        res.status(201).json(data[0]);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
