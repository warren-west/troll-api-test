require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const healthRouter = require('./routes/health')
const trollRouter = require('./routes/trolls')

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the troll API!" })
})

app.use('/health', healthRouter)
app.use('/trolls', trollRouter)

app.listen(PORT, () => {
    console.log(`Server is live in port ${PORT}...`)
})