import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}


Role.init({
    roleName:{
        type:DataTypes.STRING(50),
    }
},{
    sequelize: connection,
    modelName: "Role",
})

export default Role
