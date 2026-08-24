require("dotenv").config()
const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        status: "ok",
        uptime: `${process.uptime()} seconds`,
        port: process.env.PORT,
        nodeVersion: process.version
    })
})

module.exports = router