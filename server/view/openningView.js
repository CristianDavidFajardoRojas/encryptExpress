const layout = require('express').Router();
const { join } = require('path');

layout.get("/", (req, res)=>{ 
    res.sendFile(join(req.__dirname, process.env.EXPRESS_STATIC, '/view/index.html'));
})


module.exports = layout;