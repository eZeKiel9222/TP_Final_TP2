import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Carta from "./Carta.js";
import ModoJuego from "./ModoJuego.js";
import User from "./User.js";

class Mazo extends Model {}


Mazo.init({
    nombreMazo:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    estado:{
        type:DataTypes.STRING(50),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "Mazo",
})

export default Mazo
