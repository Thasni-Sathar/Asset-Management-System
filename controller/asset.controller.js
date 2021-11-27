const assetDao = require('../dao/asset.dao');
var assetController = {
    addAsset: addAsset,
    findAssets: findAssets,
    findAssetById: findAssetById,
    updateAsset: updateAsset,
    deleteById: deleteById
}

function addAsset(req, res) {
    let asset = req.body;
    assetDao.create(asset).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAssetById(req, res) {
    assetDao.findById(req.params.am_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    assetDao.deleteById(req.params.am_id).
        then((data) => {
            res.status(200).json({
                message: "asset deleted successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAsset(req, res) {
    assetDao.updateAsset(req.body, req.params.am_id).
        then((data) => {
            res.status(200).json({
                message: "asset updated successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAssets(req, res) {
    assetDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = assetController;