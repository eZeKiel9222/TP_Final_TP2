import { Router } from "express";
import roleRoutes from "./roleRoutes.js";
import userRoutes from "./userRoutes.js";
import modoRoutes from "./modoRoutes.js";
import cartaRoutes from "./cartaRoutes.js";
import mazoRoutes from "./mazoRoutes.js";
import cartasmazoRoutes from "./cartasMazoRoutes.js";
import cartaxmazoRoutes from "./cartaxColeccionRoutes.js";
import searchRoutes from "./searchRoutes.js";



const router = Router();


router.use("/role", roleRoutes);
router.use("/user",userRoutes);
router.use("/modo",modoRoutes);
router.use("/carta",cartaRoutes);
router.use("/mazo",mazoRoutes);
router.use("/cartasmazo", cartasmazoRoutes);
router.use("/coleccion", cartaxmazoRoutes);
router.use("/search",searchRoutes)

export default router