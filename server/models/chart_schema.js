const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    relatedValue: {
        required: true,
        type: Number
    },
    color: {
        required: true,
        type: String,
        minlength: 6
    }
}, {collection: 'chart'});

module.exports = mongoose.model('chart', chartSchema);