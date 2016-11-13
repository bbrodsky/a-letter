const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('letters', {
  To: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false
  },
  From: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: true
  },
  Location: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false
  },
  Contents: {
    type: DataTypes.TEXT(), // eslint-disable-line new-cap
    allowNull: false
  },
  Stamp: {
    type: DataTypes.TEXT(),
    allowNull:false
  }
});
