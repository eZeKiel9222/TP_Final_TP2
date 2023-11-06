import { Router } from "express";
import CartaXColeccionController from "../controller/CartaXColeccionController.js";

const cartaxmazoRoutes = Router()
const cartaxmazoController = new CartaXColeccionController

//CRUD ROLES
cartaxmazoRoutes.post("", cartaxmazoController.createCarta)
cartaxmazoRoutes.get("", cartaxmazoController.getAllCartas)
cartaxmazoRoutes.get("/:id", cartaxmazoController.getAllCartasByIdUser)
cartaxmazoRoutes.put("/:id", cartaxmazoController.updateCarta)
cartaxmazoRoutes.delete("/:id", cartaxmazoController.deleteCarta)

export default cartaxmazoRoutes