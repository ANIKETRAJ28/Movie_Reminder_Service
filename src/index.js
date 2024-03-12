const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const startAndSetup = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        // const info = await transporter.sendMail({
        //     from: "aniketraj28042003@gmail.com",
        //     to: "aniketraj28042003@gmail.com",
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        // });
    });
}

startAndSetup();