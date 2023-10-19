import express from 'express';
import {
   deleteUser,
   getAllUsers,
   getSpecial,
   getUser,
   getUserUsingDyanmicRoute,
   register,
   updateUser,
} from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/new', register);
router.get('/userid', getUser);
router.get('/userid/special', getSpecial);
router
   .route('/userid/:keyword')
   .get(getUserUsingDyanmicRoute)
   .put(updateUser)
   .post(deleteUser);

export default router;
