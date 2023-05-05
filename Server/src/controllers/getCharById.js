const axios= require('axios')
const URL= "https://rickandmortyapi.com/api/character"

const getCharById= async (req,res) => {
    try {
        const { id } = req.params
        const { data }= await axios(`${URL}/${id}`) // Como es un string no hace falta parsesarlo
    
        if (!data.name) throw Error (`Faltan datos del personaje con ID: ${id}`)
        
            const character={
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            return res.status(200).json(character) // ponemos el return porque el dar una respuesta del código no evita que se siga leyendo el código.
            // return res.status(404).send('Not Found')  // es error del usuario
        
    } catch (error) {  // error es un objeto
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error) // es error del servidor
    }
}


module.exports= {
    getCharById
}





















// const getCharById= (res,id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(Response=> Response.data)
//     .then(({name,origin,gender,species,image,status})=> {
//         const character={
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return res
//             .writeHead(200,{'Content-type': 'application/json'})
//             .end(JSON.stringify(character))
//     })
//     .catch(error=>{
//         return res
//                 .writeHead(500,{'Content-type': 'text/plain'})
//                 .end(error.message)
//     })
// }




