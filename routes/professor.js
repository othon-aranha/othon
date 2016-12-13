var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Professor = require('../models/Professor.js');

/* GET /Professor Listagem de Professores. */
router.get('/', function(req, res, next) {
  Professor.find(function (err, professor) {
    if (err) return next(err);
    res.json(professor);
  });
});

/* POST /professor Cadastro de professor */
router.post('/', function(req, res, next) {
  Professor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /professor/id  Lista filtrada por um professor*/
router.get('/:id', function(req, res, next) {
  Professor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /professor/:id Salva a edição de professor */
router.put('/:id', function(req, res, next) {
  Professor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /professor/:id Deletando o professor a partir do id */
router.delete('/:id', function(req, res, next) {
  Professor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
