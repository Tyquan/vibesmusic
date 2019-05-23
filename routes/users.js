const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a user
router.post('/', (req, res, next) => {
	User.findOne({email: req.body.email}, (err, doc) => {
		if (err)
			next(err);
		if (doc)
			return next(new Error("User Already Created"));
		let user = new User(req.body);
		bcrypt.hash(req.body.password, 10, (err, hash) => {
			if (err)
				return next(err);
			user.password = hash;
			user.save().then((result) => {
				req.session.user = result;
				res.status(201).json(req.session.user);
			}).catch((err) => {
				return next(new Error('User cannot be saved...'));
			});
		});
	});
});

// Login
router.post('/login', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
   	if (err)
      return next(err);
    if (!user)
      return next(new Error('User was not found'));
    bcrypt.compare(req.body.password, user.password, (err, match) => {
      if(match) {
        // Passwords match
        req.session.user = user;
        res.status(201).json(req.session.user);
      } else {
        // Passwords don't match
        return next(new Error('Wrong password'));
      } 
    });
  });
});





module.exports = router;
