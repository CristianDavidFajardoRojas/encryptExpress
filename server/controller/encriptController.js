const encriptModel = require('../model/encriptModel');

exports.encriptText = async (req, res) => {
    try {
        const encriptModelClass = new encriptModel()

        let resEncript = await encriptModelClass.encriptText(req.body.message);
     
        return res.status(resEncript.status).json(resEncript);
    } catch (error) {
        let err = JSON.parse(error.message);
        if(err.status == 500) return res.status(err.status).json(err);
    }
}