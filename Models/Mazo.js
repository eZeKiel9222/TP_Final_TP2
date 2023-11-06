import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class Mazo extends Model { }

Mazo.init({
    nombreMazo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        }
    },
    privado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: ErrorMessage.NOT_NULL },
            isIn: { args: [[true, false]], msg: ErrorMessage.NOT_BOOLEAN }
        }
    }
}, {
    sequelize: connection,
    modelName: "Mazo",
})

export default Mazo
