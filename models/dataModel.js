const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add the name']
    },
    value: {
        type: Number, // Change the data type to Number
        required: [true, 'please add the total stake']
    }
});

module.exports = mongoose.model('Data', dataSchema);