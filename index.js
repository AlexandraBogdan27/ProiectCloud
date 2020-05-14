const express = require("express")
const Sequelize = require('sequelize')

const sequelize = new Sequelize('artists', 'username', 'password', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

const TopTracks = sequelize.define('toptracks', {
    name: Sequelize.STRING,
    playcount: Sequelize.STRING,
    listeners: Sequelize.STRING
})

const app = express()

app.use('/', express.static('Frontend'))


app.use(express.json())
app.use(express.urlencoded())

app.listen(process.env.PORT||8080)