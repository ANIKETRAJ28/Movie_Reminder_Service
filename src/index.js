const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const apiRouter = require("./routes/index");
const { PORT, REMINDER_BINDING_KEY } = require("./config/server-config");
const { createChannel, subscribingMessage } = require("./utils/message-queue");
const NotificationService = require("./services/notification-service");
const job = require("./utils/job");

const notificationService = new NotificationService();

const app = express();

const startAndSetup = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api", apiRouter);

    const channel = await createChannel();
    subscribingMessage(channel, notificationService.subscribeEvent, REMINDER_BINDING_KEY);

    app.listen(PORT, async () => {
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }
        console.log(`Server started at port ${PORT}`);
        job();
    });
}

startAndSetup();