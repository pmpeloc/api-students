const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Models
const studentModel = require('../models/student');

// CREATE Student
router.route('/').post((req, res, next) => {
  studentModel.create(req.body, (error, data) => {
    if (error) return next(error);
    return res.json(data);
  });
});

// GET All Users
router.route('/').get((req, res, next) => {
  studentModel.find((error, data) => {
    if (error) next(error);
    return res.json(data);
  });
});

module.exports = router;
