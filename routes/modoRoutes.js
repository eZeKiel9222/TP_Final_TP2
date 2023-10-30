import { Router } from "express";
import ModoJuegoController from "../controller/ModoJuegoController.js";
const modoRoutes = Router()
const modoController = new ModoJuegoController()


//CRUD ROLES
modoRoutes.post("",modoController.createModo)
modoRoutes.get("",modoController.getAllModos)
modoRoutes.get("/:id",modoController.getModoById)
modoRoutes.put("/:id",modoController.updateModo)
modoRoutes.delete("/:id",modoController.deleteModo)



export default modoRoutes