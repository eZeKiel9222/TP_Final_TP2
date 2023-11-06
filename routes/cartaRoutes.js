import { Router } from "express";
import CartaController from "../controller/CartaController.js";

const cartaRoutes = Router()
const cartaController = new CartaController()

//CRUD ROLES
cartaRoutes.post("", cartaController.createCarta)
cartaRoutes.get("", cartaController.getAllCartas)
cartaRoutes.get("/:id", cartaController.getCartaById)
cartaRoutes.put("/:id", cartaController.updateCarta)
cartaRoutes.delete("/:id", cartaController.deleteCarta)

export default cartaRoutes