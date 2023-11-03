import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";

class User extends Model {}

User.init(
  {
    userLogin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { args: true, msg: "No puede estar vacio" },
        isAlphanumeric: { args: true, msg: "el Login tiene que ser Alphanumerico" },
      },
    },
    userPassword: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "No puede estar vacio" },
      },
    },
    nickName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique:true,
      validate: {
        notEmpty: { args: true, msg: "No puede estar vacio" },
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "No puede estar vacio" },
        isEmail: { args: true, msg: "Tiene que tener formato de email" },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;