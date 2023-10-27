import ErrorHandler from '../middlewares/error.js';
import { Task } from '../models/task.js';

export const newTask = async (req, res, next) => {
   // Its recommended to use try-catch in async function
   try {
      const { title, description } = req.body;

      await Task.create({ title, description, user: req.user });

      res.status(201).json({
         success: true,
         message: 'Task Created Successfully',
      });
   } catch (error) {
      next(error);
   }
};

export const getAllTasks = async (req, res, next) => {
   try {
      const tasks = await Task.find({ user: req.user._id });

      res.status(200).json({
         success: true,
         tasks,
      });
   } catch (error) {
      next(error);
   }
};

export const updateTask = async (req, res, next) => {
   try {
      const task = await Task.findById(req.params.id);
      if (!task) return next(new Error('Task not found')); // Error Handling in Node.js

      task.isCompleted = !task.isCompleted;
      await task.save();

      res.status(200).json({
         success: true,
         message: 'Task Updated',
      });
   } catch (error) {
      next(error);
   }
};

export const deleteTask = async (req, res, next) => {
   try {
      const task = await Task.findById(req.params.id);
      // if (!task) return next(new Error('Task not found'));
      // Now Error class have only one parameter. What if we want send another parameter as status
      // So we need to make our own error class
      if (!task) return next(new ErrorHandler('Task not found', 404));

      await task.deleteOne();

      res.status(200).json({
         success: true,
         message: 'Task Deleted',
      });
   } catch (error) {
      next(error);
   }
};
