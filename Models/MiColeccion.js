import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class MiColeccion extends Model {}


MiColeccion.init({
    id_user:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    },
    id_carta:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
    }
},{
    sequelize: connection,
    modelName: "MiColeccion",
})

export default MiColeccion