import { Router } from 'express';
import { getProperties, createProperty } from '../controllers/property';

const router = Router();

router.get('/', getProperties);
router.post('/', createProperty);

export default router;
