var express = require('express');
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();

/* GET Login Page. */
router.get('/login', (req, res, next)=> {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            console.error('Error connecting to the user collection');
            throw err;
        } else {
            if (!user) {
                res.render('login', {
                    message: 'Email/Password Incorrect'
                });
            } else {
                bcrypt.compare(req.body.password, user.password, function(err, match) {
                    if(match) {
                    // Passwords match
                    req.session.user = user;
                    let data = user;
                    req.user = data;
                    res.render('admin/dashboard');
                    } else {
                        // Passwords don't match
                        res.render('login', {
                            message: 'Email/Password Incorrect'
                        });
                    } 
                });
            }
        }
    });
});

module.exports = router;