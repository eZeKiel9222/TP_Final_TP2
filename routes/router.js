import { Router } from "express";
import roleRoutes from "./roleRoutes.js";
import userRoutes from "./userRoutes.js";
import modoRoutes from "./modoRoutes.js";
import cartaRoutes from "./cartaRoutes.js";
import mazoRoutes from "./mazoRoutes.js";
import mazosRoutes from "./mazosRoutes.js";
import coleccionRoutes from "./coleccionRoutes.js";
import cartasXMazoRoutes from "./cartasXmazoRoutes.js";

const router = Router();

router.use("/role", roleRoutes);
router.use("/user",userRoutes);
router.use("/modo",modoRoutes);
router.use("/carta",cartaRoutes);
router.use("/mazo",mazoRoutes);
router.use("/mazos",mazosRoutes);
router.use("/coleccion",coleccionRoutes)
router.use("/cartaXMazo" , cartasXMazoRoutes)

export default router