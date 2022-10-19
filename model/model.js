const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({

})

let Room = mongoose.model("Room",roomSchema);
module.exports = {Room};