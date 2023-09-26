// Create web server
var express = require('express');
var router = express.Router();
var db = require('../db');

// Get all comments
router.get('/', function(req, res, next) {
  db('comments')
    .select()
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all comments'
        });
    })
    .catch(function(err) {
      return next(err);
    });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
  db('comments')
    .select()
    .where({ id: req.params.id })
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one comment'
        });
    })
    .catch(function(err) {
      return next(err);
    });
});

// Create new comment
router.post('/', function(req, res, next) {
  db('comments')
    .insert(req.body)
    .returning('*')
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Created new comment'
        });
    })
    .catch(function(err) {
      return next(err);
    });
});

// Update comment
router.put('/:id', function(req, res, next) {
  db('comments')
    .update(req.body)
    .where({ id: req.params.id })
    .returning('*')
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Updated comment'
        });
    })
    .catch(function(err) {
      return next(err);
    });
});

// Delete comment
router.delete('/:id', function(req, res, next) {
  db('comments')
    .del()
    .where({ id: req.params.id })
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'Deleted comment'
        });
    })
    .catch(function(err) {
      return next(err);
    });
});

module.exports = router;