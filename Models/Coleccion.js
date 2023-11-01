import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Carta from "./Carta.js";
import User from "./User.js";

class Coleccion extends Model {}


Coleccion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },
    UserId:{
        type:DataTypes.INTEGER(11),
        references: {
            model : User,
            key:"id"
        }
    },
    CartaId:{
        type:DataTypes.INTEGER(11),
        references: {
            model :  Carta,
            key:"id"
        }
    }
},{
    sequelize: connection,
    modelName: "Coleccion",
})

export default Coleccion