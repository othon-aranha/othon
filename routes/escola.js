var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Escola = require('../models/Escola.js');

/* GET /Escola Listagem de Escolas. */
router.get('/', function(req, res, next) {
  Escola.find(function (err, escola) {
    if (err) return next(err);
    res.json(aluno);
  });
});

/* POST /aluno Cadastro de aluno */
router.post('/', function(req, res, next) {
  Escola.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /aluno/id  Lista filtrada por um aluno*/
router.get('/:id', function(req, res, next) {
  Escola.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /aluno/:id Salva a edição de aluno */
router.put('/:id', function(req, res, next) {
  Escola.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /aluno/:id Deletando o aluno a partir do id */
router.delete('/:id', function(req, res, next) {
  Escola.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
