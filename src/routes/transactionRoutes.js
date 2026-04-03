const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authorize = require('../middleware/rbac');

// Admin hi create kar sakta hai
router.post('/', authorize(['Admin']), transactionController.create);

// Viewer, Analyst, Admin sab dekh sakte hain
router.get('/', authorize(['Admin', 'Analyst', 'Viewer']), transactionController.getAll);

// Analyst aur Admin dashboard summary dekh sakte hain
router.get('/summary', authorize(['Admin', 'Analyst']), transactionController.getSummary);

module.exports = router;
