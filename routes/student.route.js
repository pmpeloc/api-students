const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Models
const studentModel = require('../models/student');

// CREATE Student
router.route('/').post((req, res, next) => {
  studentModel.create(req.body, (error, data) => {
    if (error) return next(error);
    console.log(data);
    return res.json(data);
  });
});

module.exports = router;
