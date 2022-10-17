const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// DB Config
const dbConfig = require('./db');
// Routes
const studentRoute = require('./routes/student.route');

// Database connect
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('Database is connected');
    },
    (error) => {
      console.error(error);
    }
  );

const app = express();
// Parse request to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS
app.use(cors());

// Global Routes
app.use('/student', studentRoute);

// Port
const PORT = 4000;
const server = app.listen(PORT, () => {
  console.info(`Server is listenning in port: ${PORT}`);
});

// Error 404
app.use((req, res, next) => {
  next(createError(404));
});

// Error Handle
app.use((err, req, res, next) => {
  console.error(err);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
