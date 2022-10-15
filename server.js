require("dotenv").config;
const express = require('express');
const path = require('path')
const workoutRoutes = require('./routes/workouts')

const app = express();
const PORT = process.env.PORT || 3001


app.use(path.join(express.static(__dirname, '../public')))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/workouts", workoutRoutes)

app.use((req, res, next) => {
    console.log(req.path, req.method)

    next()
})

app.get('/', (req, res) => {
    res.json({message: 'Hello World'})

})

app.get('/create', (req, res) => {
    res.json({message: "Yeeteetee"})
})

app.listen(PORT, () => {
    console.log(`listening to app on http://localhost:${PORT}`)
})