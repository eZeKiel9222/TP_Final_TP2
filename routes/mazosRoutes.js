import { Router } from "express";
import MazoController from "../controller/MazoController.js";
const mazosRoutes = Router()
const mazoController = new MazoController()


//CRUD ROLES
mazosRoutes.post("",mazoController.createMazo)
mazosRoutes.get("",mazoController.getAllMazos)
mazosRoutes.get("/:id",mazoController.getAllMazosByUser)
mazosRoutes.put("/:id",mazoController.updateMazo)
mazosRoutes.delete("/:id",mazoController.deleteMazo)



export default mazosRoutes