var mongoose = require('mongoose');

var subscriberSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

var Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;