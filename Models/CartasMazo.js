import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";
import Carta from "./Carta.js";

class CartasMazo extends Model {}


CartasMazo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },
    MazoId:{
        type:DataTypes.INTEGER(11),
        references: {
            model : Mazo,
            key:"id",
            unique:false
        }
    },
    CartaId:{
        type:DataTypes.INTEGER(11),
        references: {
            model :  Carta,
            key:"id",
            unique:false
        }
    }
},{
    sequelize: connection,
    modelName: "CartasMazo",
})

export default CartasMazo
