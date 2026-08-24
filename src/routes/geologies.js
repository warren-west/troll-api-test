const router = require('express').Router()

const GEOLOGIES = [
    {
        id: 1,
        name: "Mountain",
        translation: "Fjell"
    },
    {
        id: 2,
        name: "Fjord",
        translation: "Fjord"
    },
    {
        id: 3,
        name: "Forest",
        translation: "Skog"
    },
    {
        id: 4,
        name: "Sea",
        translation: "Sjø"
    },

]

// get all geologies
router.get('/', (req, res) => {
    res.json(GEOLOGIES)
})

// get oen geology
router.get('/random', (req, res) => {
    const idx = Math.floor(Math.random() * GEOLOGIES.length)
    res.json(GEOLOGIES[idx])
})

module.exports = router