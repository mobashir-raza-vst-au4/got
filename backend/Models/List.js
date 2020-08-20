const mongoose = require('mongoose');
const Schema = mongoose.Schema;
console.log("dhhdhd",mongoose.Schema.Types.ObjectId)
const ListSchema = new Schema({
    name: String,
    location: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}],
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('List', ListSchema);