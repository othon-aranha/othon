var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Transporte = require('../models/Transporte.js');

/* GET /Transporte Listagem de Transportees. */
router.get('/', function(req, res, next) {
  Transporte.find(function (err, transporte) {
    if (err) return next(err);
    res.json(transporte);
  });
});

/* POST /transporte Cadastro de transporte */
router.post('/', function(req, res, next) {
  Transporte.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /transporte/id  Lista filtrada por um transporte*/
router.get('/:id', function(req, res, next) {
  Transporte.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /transporte/:id Salva a edição de transporte */
router.put('/:id', function(req, res, next) {
  Transporte.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /transporte/:id Deletando o transporte a partir do id */
router.delete('/:id', function(req, res, next) {
  Transporte.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
