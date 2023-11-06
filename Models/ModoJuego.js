import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class ModoJuego extends Model { }

ModoJuego.init({
    nombreModo: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
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
    }
}, {
    sequelize: connection,
    modelName: "ModoJuego",
})

export default ModoJuego