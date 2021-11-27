const Asset = require('../models/Asset');
var assetDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAsset: updateAsset
}

function findAll() {
    return Asset.findAll();
}

function findById(am_id) {
    return Asset.findByPk(am_id);
}

function deleteById(am_id) {
    return Asset.destroy({ where: { am_id: am_id } });
}

function create(asset) {
    var newAsset = new Asset(asset);
    return newAsset.save();
}

function updateAsset(asset, am_id) {
    var updateAsset = {
        am_id: asset.am_id,
        am_atype_id: asset.am_atype_id,
        am_make_id: asset.am_make_id,
        am_ad_id: asset.am_ad_id,
        am_model: asset.am_model,
        am_snumber: asset.am_snumber,
        am_myyear: asset.am_myyear,
        am_pdate: asset.am_pdate,
        am_waranty: asset.am_waranty,
        am_from: asset.am_from,
        am_to: asset.am_to
    };
    return Asset.update(updateAsset, { where: { am_id: am_id } });
}
module.exports = assetDao;