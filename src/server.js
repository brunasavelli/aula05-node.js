import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const filmesMarcantes = [
    {
        id:1001,
        titulo: "Harry Potter",
        genero: "Ficção",
        emCartaz: false,
    },
    {
        id: 1002,
        titulo: "10 Coisas que Odeio em Você",
        genero: "Romance",
        emCartaz: false,
    },
    {
        id: 1003,
        titulo: "Nerve",
        gereno: "Aventura",
        emCartaz: false
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({message: "Hello, Word!"})
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})


app.listen(port, () => {
    console.log(`🔥 Server started on http://localhost:${port}`)
})