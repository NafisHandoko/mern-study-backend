require('dotenv').config()
const express = require('express')
const quoteRoutes = require('./routes/quotes')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.get('/', (req, res) => {
    res.json({ msg: "Sukses!!!" })
})

app.get('/tes', (req, res) => {
    res.json({ msg: "Masuk tes" })
})

app.use('/api/quotes', quoteRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })