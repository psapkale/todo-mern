import mongoose from 'mongoose';

export const connectDB = () => {
   // Here we are giving direct link of the database(local/server)
   // To avoid that we use variables from .env file
   // .env file contains private keys which should be kept secret
   // So put it in .gitignore file
   // .env file is connected in app.js(here)
   mongoose
      .connect(process.env.MONGO_URI, {
         dbName: 'test-api',
      })
      .then(() => console.log('Database Connected'))
      .catch((err) => console.log(err));
};
