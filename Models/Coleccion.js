import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Carta from "./Carta.js";
import User from "./User.js";

class Coleccion extends Model {}


Coleccion.init({
    UserId:{
        type:DataTypes.INTEGER(11),
        references: {
            model : User,
            key:"id"
        },
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isInt:{args:true,msg:"Tiene que ser un numero Entero"}
        }
    },
    CartaId:{
        type:DataTypes.INTEGER(11),
        references: {
            model :  Carta,
            key:"id"
        },
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isInt:{args:true,msg:"Tiene que ser un numero Entero"}
        }
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
},{
    sequelize: connection,
    modelName: "Coleccion",
})

export default Coleccion