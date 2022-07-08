//mongo model crud for chat rooms
const mongoose = require('mongoose');

// const RoomsSchema = new mongoose.Schema({
// 	rooms: String,
// });

// const Rooms = mongoose.model('Rooms', RoomsSchema);

const schema = mongoose.Schema({
	rooms: String,
});

module.exports = mongoose.model('Rooms', schema);

// module.exports = Rooms;
