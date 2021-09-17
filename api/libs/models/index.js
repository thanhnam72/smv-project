'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var mysql = require(process.cwd() + '/libs/config').get('dbconfig');
var SequelizeAuto = require('sequelize-auto')
var basename = path.basename(module.filename)
var db = {}

var configObj = {
  host: mysql.host,
  port: mysql.port,
  dialect: mysql.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  directory: './libs/models',
  additional: {
    timestamps: false
  },
  logging: false,
  // dialectOptions: {
  //   encrypt: true
  // }
}

var sequelize = new Sequelize(mysql.database, mysql.userid, mysql.password,configObj)
var sequelize_auto = new SequelizeAuto(mysql.database, mysql.userid, mysql.password, configObj);

sequelize_auto.run(function (err) {
  if (err) throw err;

  sequelize.authenticate().then(function (errors) {
    console.log('database connected!')
    if (errors) console.log(errors)
  })
  
  fs.readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(function (file) {
      var model = sequelize['import'](path.join(__dirname, file))
      db[model.name] = model
    })

  Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db