import express from 'express';
import {
   deleteTask,
   getAllTasks,
   newTask,
   updateTask,
} from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/new', isAuthenticated, newTask);
router.get('/allTasks', isAuthenticated, getAllTasks);
router
   .route('/:id')
   .put(isAuthenticated, updateTask)
   .delete(isAuthenticated, deleteTask); // Techinally 'new', 'allTasks are also 'id', but they won't be called as 'id' as they are placed before dynamic 'id'

export default router;
