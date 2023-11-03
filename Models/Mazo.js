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
        unique:true,
        validate:{
            notEmpty:{args:true, msg:'No Puede estar Vacio'},
        }
    },
    estado:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{args:true, msg:'No Puede estar Vacio'},
            isAlpha:{args:true, msg:'el Estado tiene que ser un String'},
            isIn:{args: [['Publico', 'Privado']] , msg:'el estado Solo puede ser Publico o Privado'}
        }
    }
},{
    sequelize: connection,
    modelName: "Mazo",
})

export default Mazo
