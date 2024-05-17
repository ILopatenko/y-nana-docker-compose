const express = require('express');
const mongoose = require('mongoose');

const port = 5000;

//const connectionString = `mongodb://admin:superSecret@mongo-db:27017/`;
const connectionString = process.env.MONGO_URI;
const connectDB = async string => {
   try {
      const conn = await mongoose.connect(string);
      console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

const app = express();
connectDB(connectionString);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
   console.log('Hi There! This is express server!');
   res.status(200).json({ message: 'Hi There! This is express server!' });
});
app.listen(port, () => {
   console.log(`Server started on port ${port}!`);
});
