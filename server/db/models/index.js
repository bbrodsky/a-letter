const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('letters', {
  to: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false
  },
  from: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: true
  },
  location: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false
  },
  contents: {
    type: DataTypes.TEXT(), // eslint-disable-line new-cap
    allowNull: false
  },
  stamp: {
    type: DataTypes.TEXT(),
    allowNull:false
  }
});
