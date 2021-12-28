const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku - zmiana!</h1>")
})


app.get("/data", function (req, res) {
    obj = {imie : "Zuzanna", nazwisko: "Zawartka",klasa:"3i2",grupa:"1"}
    res.send(obj)
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})