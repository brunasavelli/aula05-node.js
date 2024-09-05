import { Router } from "express";

import doceRoutes from "./doces.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({message: "Servidor funfando 🥵"})
});

routes.use("/doces", doceRoutes);
export default routes;