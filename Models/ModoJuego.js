import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class ModoJuego extends Model {}


ModoJuego.init({
    nombreModo:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "ModoJuego",
})

export default ModoJuego