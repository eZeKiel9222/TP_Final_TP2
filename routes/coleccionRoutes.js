import { Router } from "express";
import MiColeccionController from "../controller/MiColeccionController.js";
const coleccionRoutes = Router()
const coleccionController = new MiColeccionController()


//CRUD ROLES
coleccionRoutes.post("",coleccionController.createColeccion)
coleccionRoutes.get("",coleccionController.getAllColecciones)
coleccionRoutes.get("/:id",coleccionController.getAllColeccionesByIdUser)
coleccionRoutes.put("/:id",coleccionController.updateColecciones)
coleccionRoutes.delete("/:id",coleccionController.deleteColeccion)



export default coleccionRoutes