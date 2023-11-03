import { Router } from "express";
import MazoController from "../controller/MazoController.js";
const mazoRoutes = Router()
const mazoController = new MazoController()


//CRUD ROLES
mazoRoutes.post("",mazoController.createMazo)
mazoRoutes.get("",mazoController.getAllMazos)
mazoRoutes.get("/user/:id", mazoController.getAllMazosByUser)
mazoRoutes.get("/:id",mazoController.getMazoById)
mazoRoutes.put("/:id",mazoController.updateMazo)
mazoRoutes.delete("/:id",mazoController.deleteMazo)



export default mazoRoutes