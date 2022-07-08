const express = require('express');
// const router = require('express').Router();
const router = express.Router();
const Rooms = require('../models/Rooms');

// GET all rooms
router.get('/rooms', async (req, res) => {
	const rooms = await Rooms.find();
	res.send(rooms);
});

// POST a new room
router.post('/rooms', async (req, res) => {
	const rooms = new Rooms({
		rooms: req.body.rooms,
	});
	await rooms.save();
	res.send(rooms);
});

module.exports = router;
