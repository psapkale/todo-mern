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
// Advantage of router than app is that router provide prefix in the url

router.get('/all', getAllUsers);
router.post('/new', register);
router.get('/userid', getUser);
router.get('/userid/special', getSpecial);
// router.get('/userid/:keyword', getUserUsingDyanmicRoute);
// router.put('/userid/:keyword', updateUser);
// router.post('/userid/:keyword', deleteUser);
// Above we hava same routes for different methods
// Instead we can do
router
   .route('/userid/:keyword')
   .get(getUserUsingDyanmicRoute)
   .put(updateUser)
   .post(deleteUser);

export default router;
