import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Carta from "./Carta.js";
import User from "./User.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class Coleccion extends Model { }

Coleccion.init({
    UserId: {
        type: DataTypes.INTEGER(11),
        references: {
            model: User,
            key: "id"
        },
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
            isInt: { args: true, msg: ErrorMessage.NOT_INT }
        }
    },
    CartaId: {
        type: DataTypes.INTEGER(11),
        references: {
            model: Carta,
            key: "id"
        },
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
            isInt: { args: true, msg: ErrorMessage.NOT_INT }
        }
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
}, {
    sequelize: connection,
    modelName: "Coleccion",
})

export default Coleccion