const express = require('express');
const routers = require('./routers');
const mongoSanitize = require('express-mongo-sanitize')
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectionDb');
const errorHandler = require('./middlewares/errors/errorHandler');

dotenv.config({path: './config/env/config.env'})
connectDatabase();


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000
app.use(express.static("public"));
app.use(mongoSanitize());

app.use('/', routers)


app.use(errorHandler)

app.listen(PORT, () => {
    console.log("App listen PORT:", PORT)
})

