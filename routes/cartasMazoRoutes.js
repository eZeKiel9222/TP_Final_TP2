import { Router } from "express";
import CartasMazoController from "../controller/CartasMazoController.js";
const cartasmazoRoutes = Router()
const cartasmazoController = new CartasMazoController

//CRUD ROLES
cartasmazoRoutes.post("",cartasmazoController.createCarta)
cartasmazoRoutes.get("",cartasmazoController.getAllCartas)
cartasmazoRoutes.get("/:id",cartasmazoController.getAllCartasByIdMazo)
cartasmazoRoutes.put("/:id",cartasmazoController.updateCarta)
cartasmazoRoutes.delete("/:id",cartasmazoController.deleteCarta)



export default cartasmazoRoutes