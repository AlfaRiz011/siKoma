const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

// follow Admin
router.post('/admin/:userId', followController.followAdmin);

// follow Tag
router.post('/tag/:userId', followController.followTag);

// Get All follow Admin
router.get('/admin/:userId', followController.getFollowAdmin);

// Get All follow Tag
router.get('/tag/:userId', followController.getFollowTag);

module.exports = router;
