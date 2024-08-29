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
];

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})