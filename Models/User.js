import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model { }

User.init({
    userLogin: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        get() {
            const rawValue = this.getDataValue('userLogin');
            return rawValue ? rawValue.toUpperCase() : null;
        },
        set(value) {
            this.setDataValue('userLogin', value)
        }

    },
    
    userPassword: {
        type: DataTypes.STRING(50),
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('userPassword');
            return rawValue ? rawValue.toUpperCase() : null;
        },
        set(value) {
            this.setDataValue('userPassword', value)
        }
    }
}, {
    sequelize: connection,
    modelName: "User",
})

export default User
