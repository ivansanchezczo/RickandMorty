const {getCharById}= require('../controllers/getCharById')
const {login}= require('../controllers/login')
const {postFav, deleteFav}= require('../controllers/handleFavorites')

const router= require('express').Router() // aquí traemos todo express y lo que hacemos directamente es quedarnos con el router y nos evitamos crear una constante

router.get("/character/:id",(req,res)=>{
    getCharById(req,res)
})

router.get("/login", login) // es lo mismo que hacer la de abajo, req y res pasan como parámetros x default al controlador. Es la versión corta
// router.get("/login", (req,res)=>{
//     login(req,res)
// })

router.post("/fav",(req,res)=>{
    postFav(req,res)
})

router.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res)
})



module.exports= router;