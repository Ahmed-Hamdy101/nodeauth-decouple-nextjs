// endPointRoutes.ts
import { Router } from 'express';
import userProfilePoint from '@src/routes/api/user.route';
import authEndPoint from '@src/routes/api/auth.route';
import authenticateToken from '@src/middleware/Auth/auth.middleware';

const endPointRoutes = Router();

// ** Auth Routes (public login/register, protected logout inside file) **
endPointRoutes.use('/', authEndPoint);

// ** Profile Routes (all protected here) **
endPointRoutes.use('/profile', authenticateToken, userProfilePoint);

export default endPointRoutes;
