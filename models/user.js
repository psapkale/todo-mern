import mongoose from 'mongoose';

const schema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   email: {
      type: String,
      require: true,
      unique: true,
   },
   password: {
      type: String,
      select: false, // Not allowed to use directly(use User.select("+fieldName"))
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

export const User = mongoose.model('User', schema);
