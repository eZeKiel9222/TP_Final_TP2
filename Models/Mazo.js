import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Mazo extends Model {}


Mazo.init({
    nombreMazo:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    id_user:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    },
    estado:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    modo:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "Mazo",
})

export default Mazo
