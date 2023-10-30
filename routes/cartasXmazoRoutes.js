import { Router } from "express";
import CartasXMazoController from "../controller/CartasXMazoController.js";
const cartasXMazoRoutes = Router()
const cartasXMazoController = new CartasXMazoController()


//CRUD ROLES
cartasXMazoRoutes.post("",cartasXMazoController.createCartaXMazo)
cartasXMazoRoutes.get("",cartasXMazoController.getAllCartasXMazo)
cartasXMazoRoutes.get("/:id",cartasXMazoController.getCartasXMazoByIdMazo)
cartasXMazoRoutes.put("/:id",cartasXMazoController.updateCartaXMazo)
cartasXMazoRoutes.delete("/:id",cartasXMazoController.deleteCarta)



export default cartasXMazoRoutes