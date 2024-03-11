const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");

const app = express();

const startAndSetup = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
}

startAndSetup();