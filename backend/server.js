const express = require('express');
const mongoose = require('mongoose');

const port = process.env.SERVER_PORT || 5000;

const connectionString = `mongodb://admin:superSecret@3.3.3.2:27017/`;
const connectionString2 = `mongodb+srv://mongo-user-mern-goal-setter:passwword>@cluster-mern-goal-sette.bzla4sg.mongodb.net/?retryWrites=true&w=majority&appName=cluster-mern-goal-setter`;
console.log({ connectionString });
const connectDB = async string => {
   console.log('let us try to connect');
   console.log('let us try to connect');
   console.log('let us try to connect');
   console.log('let us try to connect');
   try {
      const conn = await mongoose.connect(string);
      console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
   console.log('let us try to connect');
   console.log('let us try to connect');
   console.log('let us try to connect');
   console.log('let us try to connect');
};

const app = express();
connectDB(connectionString2);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
   console.log('Hi There! This is express server!');
   res.status(200).json({ message: 'Hi There! This is express server!' });
});
app.listen(port, () => {
   console.log(`Server started on port ${port}! Connection string is ${connectionString}`);
});
