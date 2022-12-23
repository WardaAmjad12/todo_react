const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let todo = new Schema(
    {
        listId: String,
        title: String,
        date: Date,
        isMarked: Boolean
    },
    { timestamps: true }
)
module.exports = todo