const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
 
const sequelize = new Sequelize(
    // passing dB configs to Sequelize object
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// Automatically read through all the modules on the models folder and
// include to Sequelize (skip index.js file)
fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        // This will declare all the models to be used by Sequelize
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

// returns dB object
module.exports = db


