import express from "express"
import router from "./routes/router.js";
import connection from "./connection/connection.js";
import { config } from "./config/config.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api", router);

await connection.sync({ force: false });

app.listen(config.serverPort, () => {
    console.log("El servidor esta funcionando")
});