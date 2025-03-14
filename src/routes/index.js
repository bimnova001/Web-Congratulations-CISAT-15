const express = require('express');
const router = express.Router();

// Route to serve the main HTML file
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

module.exports = router;