var express = require('express');
var router = express.Router();

var Sequelize = require('Sequelize');

const sequelize = new Sequelize('portfolio_db', 'christian', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

/* GET commentsgit . */

/*
  C - create: comments/new:pid
  R - read: comments/:pid
  U - update: comments/:cid
  D - delete: comments/delete:cid
*/

router.get('/:pid', function(req, res, next) {
});

module.exports = router;
