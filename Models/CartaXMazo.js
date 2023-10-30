import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class CartaXMazo extends Model {}


CartaXMazo.init({
    id_mazo:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    },
    id_carta:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "CartaXMazo",
})

export default CartaXMazo
