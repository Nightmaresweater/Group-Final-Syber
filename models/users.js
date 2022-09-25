'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    UserId: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING,
    Admin: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
  });

  users.associate = function(models) {
    users.hasMany(models.posts, {
      foreignKey: "UserId"
    });
  };
  users.prototype.comparePassword = function(plainTextPassword) {
    let user = this;
    console.log("users/models comparePassword");
    return bcrypt.compareSync(plainTextPassword, user.Password);
  };

  return users;
};