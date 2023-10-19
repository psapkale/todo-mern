import { User } from '../models/user.js';

export const getAllUsers = async (req, res) => {
   const users = await User.find({});

   res.json({
      success: true,
      users,
   });
};

export const register = async (req, res) => {
   const { name, email, password } = req.body;

   await User.create({
      name,
      email,
      password,
   });

   res.status(201).cookie('temp', 'lol').json({
      success: true,
      message: 'Registered successfully',
   });
};

export const getUser = async (req, res) => {
   const { id } = req.body;
   const user = await User.findById(id);
   res.json({
      success: true,
      user,
   });
};

export const getSpecial = (req, res) => {
   res.json({
      success: true,
      message: 'Special User',
   });
};

export const getUserUsingDyanmicRoute = async (req, res) => {
   const { keyword } = req.params;
   const user = await User.findById(keyword);
   res.json({
      success: true,
      user,
   });
};

export const updateUser = async (req, res) => {
   const { keyword } = req.params;
   const user = await User.findById(keyword);
   res.json({
      success: true,
      message: 'Updated',
   });
};

export const deleteUser = async (req, res) => {
   const { keyword } = req.params;
   const user = await User.findById(keyword);
   await User.deleteOne(user);
   res.json({
      success: true,
      message: 'Deleted',
   });
};
