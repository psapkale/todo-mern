import mongoose from 'mongoose';

const schema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      require: true,
   },
   isCompleted: {
      type: Boolean,
      default: false,
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to collection (here User)
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

export const Task = mongoose.model('Task', schema);
