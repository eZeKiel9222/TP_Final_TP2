import express from "express"
import router from "./routes/router.js";
import connection from "./connection/connection.js";
import { config } from "./config/config.js";
import cors from "cors"

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api", router);
app.use((req,res)=>{res.status(400).send('EndPoint Not Found')})
await connection.sync({ force: false });

app.listen(config.serverPort, () => {
    console.log("El servidor esta funcionando")
});
