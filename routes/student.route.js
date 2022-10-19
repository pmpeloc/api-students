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

// GET All Students
router.route('/').get((req, res, next) => {
  studentModel.find((error, data) => {
    if (error) return next(error);
    return res.json(data);
  });
});

// GET Student by ID
router.route('/:id').get((req, res, next) => {
  studentModel.findById(req.params.id, (error, data) => {
    if (error) return next(error);
    return res.json(data);
  });
});

// UPDATE Student by ID
router.route('/:id').put((req, res, next) => {
  studentModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (error, data) => {
      if (error) return next(error);
      return res.json(data);
    }
  );
});

// DELETE Student by ID
router.route('/:id').delete((req, res, next) => {
  studentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) return next(error);
    return res.json(data);
  });
});

module.exports = router;
