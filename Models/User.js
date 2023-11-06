import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class User extends Model { }

User.init(
  {
    userLogin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        isAlphanumeric: { args: true, msg: ErrorMessage.NOT_ALPHANUMERIC },
      },
    },
    userPassword: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
      },
    },
    nickName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        isEmail: { args: true, msg: ErrorMessage.NOT_EMAIL },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;