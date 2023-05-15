import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from '../utils/connection.js';

const User = sequelize.define('User', {
    // Model attributes are defined here
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
});

export default User;