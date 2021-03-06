var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;