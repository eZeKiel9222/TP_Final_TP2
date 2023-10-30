import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Carta extends Model {}


Carta.init({
    cardName:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    cardurl:{
        type:DataTypes.STRING(50),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "Carta",
})

export default Carta
