var express = require('express');
var mongoose = require('mongoose');
var Message = require('../models/message');
var router = express.Router();

/* Contact form */
router.get('/contact', (req, res, next) => {
    res.render('static/contact');
});
router.post('/contactform', (req, res, next) => {
    var message = new Message(req.body);
    message.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/contact', {
                messages: data,
                trunks: 'Message has be successfully sent! I will email you shortly'
            });
        }
    });
});


module.exports = router;