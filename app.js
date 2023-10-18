import express, { query } from 'express';
import router from './routes/user.js';
import { config } from 'dotenv';
// Connecting .env file
config({
   path: './data/config.env',
});

export const app = express();
// Middleware to access json data from postman/browser
app.use(express.json());

// mongoose
//    .connect('mongodb://127.0.0.1:27017', {
//       dbName: 'test-api',
//    })
//    .then(() => console.log('Database Connected'))
//    .catch((err) => console.log(err));

// const schema = new mongoose.Schema({
//    name: String,
//    email: String,
//    password: String,
// });

// const User = mongoose.model('User', schema);

// // * Making APIs

app.get('/', (req, res) => {
   res.send('Nice Working');
});

// app.get('/users/all', async (req, res) => {
//    const users = await User.find({});

//    // Query part is after ?
//    // http://localhost:4000/users/all?keyword=item&price=2200&category=product
//    console.log(req.query);
//    const keyword = req.query.keyword;
//    console.log(keyword);

//    res.json({
//       success: true, // Necessary parameter according to industry standards
//       users,
//    });
// });

// // We can access get requests only from the browser
// // Postman is used to test api without using form

// app.post('/users/new', async (req, res) => {
//    const { name, email, password } = req.body; // req.body will be undefined and cannot be destructured, so we've to use middleware

//    await User.create({
//       name,
//       email,
//       password,
//    });

//    res.status(201).cookie('temp', 'lol').json({
//       success: true,
//       message: 'Registered successfully',
//    });
// });

// app.get('/userid', async (req, res) => {
//    const { id } = req.body;
//    // const { id } = req.query; // Or access from the query
//    const user = await User.findById(id);
//    res.json({
//       success: true,
//       user,
//    });
// });
// app.get('/userid/special', (req, res) => {
//    res.json({
//       success: true,
//       message: 'Special User',
//    });
// });
// // Try to keep dynamic routes below because other routes defined below dynamic route will be skipped if the dynamic route gets its value of variable
// // E.g above url /userid/special will be skipped if its defined below dyanmic route /userid/:keyword and req.params.keyword will be special in this case
// // Try putting above /userid/special below /userid/:keyword
// // Dynamic url
// // http://localhost:4000/userid/asdfk - :keyword is replaced by asdfk and can be accessed by req.params.keyword(variable name)
// // http://localhost:4000/userid/652c24211279de865508795d
// app.get('/userid/:keyword', async (req, res) => {
//    const { keyword } = req.params;
//    // const user = await User.findById(keyword);
//    console.log(req.params);
//    res.json({
//       success: true,
//       user: {},
//    });
// });

// Now our file is preety messed up
// * Route splitting MVC(Model View Controller)
// Routes in routes folder
// Database in models folder
// Functions in controllers folder
// To use router in app we need use()
app.use('/users', router);
// Now our app.js is cleaned up
