const express = require('express');

const routers = express.Router();

routers.get('/', (req, res)=>{
     res.send("Hello world")
}
)

module.exports = routers;

