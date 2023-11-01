import User from "./User.js";
import Mazo from "./Mazo.js";
import Carta from "./Carta.js";
import ModoJuego from "./ModoJuego.js";
import CartasMazo from "./CartasMazo.js";
import Coleccion from "./Coleccion.js";
import Role from "./Role.js";


User.hasMany(Mazo)
Mazo.belongsTo(User)
Mazo.belongsToMany(Carta , {through: CartasMazo , foreignKey:'MazoId' , uniqueKey:false});
Carta.belongsToMany(Mazo, {through: CartasMazo, foreignKey: 'CartaId',uniqueKey: false});
Mazo.belongsTo(ModoJuego);
ModoJuego.hasMany(Mazo)
User.belongsToMany(Carta,{through: Coleccion , foreignKey: 'UserId',uniqueKey:false})
Carta.belongsToMany(User,{through: Coleccion, foreignKey: 'CartaId',uniqueKey:false})




export {User,Mazo,Carta,ModoJuego,CartasMazo, Coleccion,Role}