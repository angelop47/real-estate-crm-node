import { Router } from 'express';
import { getDepartments } from '../controllers/department';

const router = Router();

router.get('/', getDepartments);

export default router;
