const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/Database');
const Admin = require('./Admin');
const User = require('./User');

const FollowOrganization = sequelize.define('FollowOrganization', {
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'user_id',
      },
      onDelete: 'CASCADE',
      primaryKey: true,
  },
  admin_id: {
      type: DataTypes.INTEGER,
      references: {
          model: Admin,
          key: 'admin_id',
      },
      onDelete: 'CASCADE',
      primaryKey: true,
  },
}, {
  tableName: 'FollowOrganization',
  timestamps: false,
});

FollowOrganization.belongsTo(Admin, {
  foreignKey: 'admin_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
FollowOrganization.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
module.exports = FollowOrganization;