import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class Carta extends Model { }

Carta.init({
    cardName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        }
    },
    image: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
            isUrl: { args: true, msg: ErrorMessage.NOT_URL }
        }
    },
    cardurl: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
            isUrl: { args: true, msg: ErrorMessage.NOT_URL }
        }
    }
}, {
    sequelize: connection,
    modelName: "Carta",
})

export default Carta
