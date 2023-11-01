import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Carta extends Model {}


Carta.init({
    cardName:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true,
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isAlphanumeric:{args: true, msg:'Tiene que ser Alphanumerico'},
        }
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isUrl:{args:true,msg:'Tiene que ser un Url de Imagen' }
        }
    },
    cardurl:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{args:true, msg:'No puede estar vacio'},
            isUrl:{args:true,msg:'Tiene que ser un Url de Imagen' }
        }
    }
},{
    sequelize: connection,
    modelName: "Carta",
})

export default Carta
