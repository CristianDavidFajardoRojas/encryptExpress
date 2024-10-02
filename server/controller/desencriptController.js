const encriptModel = require('../model/encriptModel');

exports.desencriptText = async (req, res) => {
    try {
        console.log("ASDASDSA")
        const encriptModelClass = new encriptModel()

        let resEncript = await encriptModelClass.desencriptTextFunc(req.body.message);
     
        return res.status(resEncript.status).json(resEncript);
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}