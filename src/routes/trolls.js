const router = require('express').Router()

const TROLLS = [
  {
    id: 1,
    name: "Dovregubben",
    description: "The formidable Mountain King from Norwegian folklore, immortalized in Henrik Ibsen's Peer Gynt. He rules over the underground troll kingdom deep beneath the mountains.",
    location: "Dovrefjell"
  },
  {
    id: 2,
    name: "Jotun",
    description: "Ancient, gigantic frost and mountain trolls from Norse mythology, known for their immense size, brute strength, and fierce rivalry with the gods, especially Thor.",
    location: "Jotunheimen"
  },
  {
    id: 3,
    name: "Huldra",
    description: "A forest-dwelling creature closely tied to troll folklore. She appears as a beautiful woman with a cow's tail, known for luring humans into the mountains with her hypnotic singing.",
    location: "Rondane"
  },
  {
    id: 4,
    name: "Trehode-troll",
    description: "A iconic three-headed mountain troll featured in traditional Asbjørnsen and Moe folktales. Multi-headed trolls are notoriously dim-witted and easily outsmarted by clever travelers.",
    location: "Trollheimen"
  },
  {
    id: 5,
    name: "Nøkken",
    description: "A shapeshifting water spirit associated with troll-kind that inhabits dark lakes and rivers. He plays spellbinding violin melodies to draw unwary passersby into deep waters.",
    location: "Telemark"
  }
]

// get all trolls
router.get('/', (req, res) => {
    res.status(200).json(TROLLS)
})

// get one troll
router.get('/random', (req, res) => {
    const idx = Math.floor(Math.random() * TROLLS.length)
    res.status(200).json(TROLLS[idx])
})

module.exports = router