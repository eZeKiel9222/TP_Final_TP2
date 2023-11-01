import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";
import Carta from "./Carta.js";

class CartasMazo extends Model {}


CartasMazo.init({
    MazoId:{
        type:DataTypes.INTEGER(11),
        references: {
            model : Mazo,
            key:"id",
        }
    },
    CartaId:{
        type:DataTypes.INTEGER(11),
        references: {
            model :  Carta,
            key:"id",
        }
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
},{
    sequelize: connection,
    modelName: "CartasMazo",
})

export default CartasMazo
