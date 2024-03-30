const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clipboardSchema = new Schema({
    data:{
        type: String,
        required: true
    },
    
    tag:{
        type: String,
        required: true
    }
}, {timestamps: true});


const Clip = mongoose.model('Clip', clipboardSchema);

module.exports = Clip;

