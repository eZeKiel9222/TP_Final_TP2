import { Router } from "express";
import SearchController from "../controller/SearchController.js";

const searchRoutes = Router()
const searchController = new SearchController

//Searchs
searchRoutes.get("/modo/:id", searchController.getMazosByModo)
searchRoutes.get("/user/:id", searchController.getMazosByUser)
searchRoutes.get("/name/:id", searchController.getMazosByNombre)

export default searchRoutes