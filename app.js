const express = require('express');
const { join } = require('path')

const openningRouter = require('./server/router/openningRouter')
const encriptRouter = require('./server/router/encriptRouter')
const desencriptRouter = require('./server/router/desencriptRouter')


const app = express();


app.use('/css', express.static(join(__dirname, process.env.EXPRESS_STATIC, 'css')))
app.use('/js', express.static(join(__dirname, process.env.EXPRESS_STATIC, 'js')))
app.use('/storage', express.static(join(__dirname, process.env.EXPRESS_STATIC, 'storage')))



app.use("/", (req, res, next)=>{
    req.__dirname = __dirname;
    next()
}, openningRouter);

app.use("/encript", (req, res, next)=>{
    req.__dirname = __dirname;
    next()
}, encriptRouter);

app.use("/desencript", (req, res, next)=>{
    req.__dirname = __dirname;
    next()
}, desencriptRouter);






app.use((req, res)=>{
    res.status(404).json({message: "The endpoint is not available"});
})

let config = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST_NAME
}

app.listen(config, ()=>{
    console.log(`Server running at ${process.env.EXPRESS_PROTOCOL}${config.host}:${config.port}`);
});


