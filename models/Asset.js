const Sequelize = require('sequelize')
const db = require('../config/database')

const Asset = db.define('asset', {
    am_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    am_atype_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    am_make_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    am_ad_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    am_model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_snumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    am_myyear: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    am_pdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    am_waranty: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    am_to: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Asset;
