exports.encriptText = async (req, res) => {
    try {
        console.log(req.body)
        // const movie = new Movie(req.data);
        
        // let resMovie = await movie.getMovieById(req.params.id);
        // const salas = new Salas(req.data);
        // let resSalas = await salas.getSalaById(req.params.idSala);
        // const funciones = new Funcion(req.data);
        // let resFunciones = await funciones.getFuncionesBySalaAndMovie(req.params.id, req.params.idSala)


        // if(resMovie.status == 200) return res.status(resMovie.status).json(resMovie);
        // return res.status(resMovie.status).json(resMovie);
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}