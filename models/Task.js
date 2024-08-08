const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('à faire', 'en cours', 'terminé'),
    defaultValue: 'à faire',
  },
});

Task.belongsTo(User, { foreignKey: 'Pid_person', as: 'owner' });

module.exports = Task;