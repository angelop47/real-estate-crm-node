import { Router } from 'express';
import propertyRoutes from './propertyRoutes';
import usersRoutes from './usersRoutes';
import citiesRoutes from './citiesRoutes';
import departmentRoutes from './departmentRoutes';
// import clientsRoutes from './clientsRoutes'; // Uncomment when implemented

const router = Router();

router.use('/properties', propertyRoutes);
router.use('/users', usersRoutes);
router.use('/cities', citiesRoutes);
router.use('/departments', departmentRoutes);
// router.use('/clients', clientsRoutes);

export default router;
