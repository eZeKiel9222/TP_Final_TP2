import {  DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Mazo from "./Mazo.js";
import Carta from "./Carta.js";

class CartasMazo extends Model {}


CartasMazo.init({
    MazoId:{
        type:DataTypes.INTEGER(11),
        references: {
            model : Mazo,
            key:"id",
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
            key:"id",
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
    modelName: "CartasMazo",
})

export default CartasMazo
