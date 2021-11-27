const express = require('express');
const router = express.Router();
const assetRoutes = require('./assets.route');

router.use('/assets', assetRoutes);
module.exports = router;