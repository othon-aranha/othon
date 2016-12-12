var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Aluno = require('../models/Aluno.js');

/* GET /aluno Listagem de alunos. */
router.get('/', function(req, res, next) {
  Aluno.find(function (err, aluno) {
    if (err) return next(err);
    res.json(aluno);
  });
});

/* POST /aluno Cadastro de aluno */
router.post('/', function(req, res, next) {
  Aluno.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /aluno/id  Lista filtrada por um aluno*/
router.get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /aluno/:id Salva a edição de aluno */
router.put('/:id', function(req, res, next) {
  Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /aluno/:id Deletando o aluno a partir do id */
router.delete('/:id', function(req, res, next) {
  Aluno.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
