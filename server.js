const express = require("express")
const resturaunts = require("./data.js")
const app = express()
const PORT = 3005

app.get("/", (req, res) => {
    res.render("../views/index.ejs")
})

app.get("/resturaunts", (req, res) => {
    res.render("../views/all-resturaunts.ejs", {resturaunts})
})

app.get("/resturaunts/:id", (req, res) => {

    const findResturant = resturaunts.find((e) => {
        return e.id === Number(req.params.id);
    })
    res.render("../views/resturaunts-details.ejs", {resturaunt: findResturant})
})


app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})