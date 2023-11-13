import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";
import bcrypt from 'bcrypt'
class User extends Model { 
validatePassword = async (password) => {
  const validate = await bcrypt.compare(password, this.userPassword)
  return validate
}
}

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

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  
  const hashPassword = await bcrypt.hash(user.userPassword, salt)
  user.userPassword = hashPassword
})

export default User;