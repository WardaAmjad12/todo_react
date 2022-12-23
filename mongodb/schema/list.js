const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let list = new Schema({
    title: String,
},
    { timestamps: true }
)
module.exports = list