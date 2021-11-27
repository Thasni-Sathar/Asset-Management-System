const express = require('express');
const router = express.Router();
const assetController = require('../controller/asset.controller');

router.post('/', assetController.addAsset);
router.get('/', assetController.findAssets);
router.get('/:am_id', assetController.findAssetById);
router.put('/:am_id', assetController.updateAsset);
router.delete('/:am_id', assetController.deleteById);

module.exports = router;