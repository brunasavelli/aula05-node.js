import { Router } from "express";

import doceRoutes from "./doces.routes.js";
import filmesRoutes from "./filmes.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funfando 🥵" })
});

routes.use("/doces", doceRoutes);
routes.use("/filmes", filmesRoutes);
export default routes;