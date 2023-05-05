let myFavorites=[]

const postFav= (req,res) =>{
    try {
        const character= req.body // no hace falta destructuring en este caso
        const characterFound= myFavorites.find(fav=> fav.id === character.id)
        
        if (characterFound) throw Error ('Ya existe ese personaje en favoritos')
            myFavorites.push(character)
            res.status(200).json(myFavorites)
        
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const deleteFav= (req,res) => {
    const {id}= req.params

    myFavorites= myFavorites.filter(pj=>{
        return pj.id != +id     // hay que parsearlo porque es un string 
    })

    res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}
