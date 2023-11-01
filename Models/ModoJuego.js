import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class ModoJuego extends Model {}


ModoJuego.init({
    nombreModo:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false,
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isAlpha:{args:true, msg:'el Estado tiene que ser un String'}
        }
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isUrl:{args:true,msg:'Tiene que ser un Url de Imagen' }
        }
    }
},{
    sequelize: connection,
    modelName: "ModoJuego",
})

export default ModoJuego