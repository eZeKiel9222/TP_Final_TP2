import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";

class User extends Model { }

User.init({
    userLogin: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,

    },
    
    userPassword: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: "User",
})

export default User
