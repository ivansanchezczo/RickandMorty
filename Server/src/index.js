const express = require ('express')
const server= express()
const PORT= 3001


server.listen(PORT, ()=>{
    console.log(`Server raised in port: ${PORT}`)
})


































// const http= require('http')
// const {getCharById} = require('./controllers/getCharById')



// http
//     .createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*') // con esta línea lo que hacemos es permitir que el front end nos haga peticiones sin problemas
    
//     if (req.url.includes('/rickandmorty/character')){
//         const id= req.url.split('/').at(-1)
//         getCharById(res,+id)
//     }
    
// })
//     .listen(3001)
















