import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";
import Carta from "./Carta.js";
import { ErrorMessage } from "../helper/ErrorMessage.js";

class CartasMazo extends Model { }

CartasMazo.init({
    MazoId: {
        type: DataTypes.INTEGER(11),
        references: {
            model: Mazo,
            key: "id",
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
            key: "id",
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
    modelName: "CartasMazo",
})

export default CartasMazo
