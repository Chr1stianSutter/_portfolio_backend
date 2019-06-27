var express = require('express');
var router = express.Router();
//var mysql = require('mysql');

var Sequelize = require('Sequelize');

const portfolio_db = new Sequelize('portfolio_db', 'christian', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

portfolio_db.authenticate().then((err)=>{
  if (err) {
    consol.log('Connection Error');
    return;
  }
  console.log('sucessful connected');
})

const comment = portfolio_db.import("../db_models/comments_model.js");

portfolio_db.sync();

/* GET commentsgit . */

/*
  C - create: comments/new:pid
  R - read: comments/:pid
  U - update: comments/:id
  D - delete: comments/delete:id
*/

/*
router.put('/project/:id', (req, res, next) => {
  var projectId = req.params.id.toString();
  console.log("Received call to update project with id:", projectId);
  
  db.user.Projects.update({
      name: req.body.name.toString(),
      description: req.body.description.toString()
    },{
    where: {
      id: projectId
    },
    limit: 1
  }).then(result => {
    res.json({response: result})
  }).catch(err => {
    console.error("Could not find project with id:", projectId, "\n\n", err, "\n");
  });
});

router.delete('/project/:id', (req, res, next) => {
  var projectId = req.params.id.toString();
  console.log("Delete Request for Project with id:", projectId);
  
  db.user.Projects.findAll({
    limit: 1,
    where: {
      id: projectId
    }
  }).then(result => {
    result[0].destroy()
  }).catch(err => {
    console.error("\n\nCould not delete project with id:", projectId, "- Error:\n", err, "\n")
  })
});
*/

//   C - create: comments/:pid
router.post('/:pid', function(req, res, next) {

});

//   R - read: comments/:pid
router.get('/:pid', function(req, res, next) {
  comment.findAll({
    where: {
      pid: req.params.pid
    },
    order: [['createdAt', 'DSC']]
  }).then(result => {
    res.json({
      response: result
    })
  }).catch(err => {
    console.log("Following error occured:\n" + err)
  })
});

//   U - update: comments/:id
router.put('/:id', function(req, res, next) {
  var commentId = req.params.id.toString();
    
  comment.update({
    name: req.body.name.toString(),
    email: req.body.email.toString(),
    comment: req.body.comment.toString()
  },{
    where: {
      id: commentId
    },
    limit: 1
  }).then(result => {
    res.json({response: result})
  }).catch(err => {
    console.error("No comment with id "+commentId+"found\n", err);
  });
});


//   D - delete: comments/:id
router.delete('/:id', function(req, res, next) {
  var commentId = req.params.id.toString();
  comment.findAll({
      limit: 1,
      where: {
        id: commentId
      }
    }).then(result => {
      result[0].destroy()
    }).catch(err => {
      console.error("Encountered the following error while trying to delete Project "+commentId+ ":", err,)
    })
});

router.post('/:pid', (req, res, next) => {
  var name = req.body.name.toString();
  var email = req.body.email.toString();
  var comment = req.body.comment.toString();
  var pid = req.body.pid.toString();

  comment.build({
    name: name,
    email: email,
    comment: comment,
    pid: pid

  }).save().then(entry => {
    //Created Project
    console.log("DB response:\n", entry);
    res.json({response: entry});

  }).catch(err => {
    //Server Error
    if(err){
      console.error("Fehler:\n", err);
      res.next(new CreateError(500));
    }
  });
});

module.exports = router;
