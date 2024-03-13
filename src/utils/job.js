const nodeCorn = require("node-cron");
const NotificationService = require("../services/notification-service");

const notificationService = new NotificationService();

const setupJob = () => {
    nodeCorn.schedule("*/1 * * * *", async () => {
        const mails = await notificationService.getAll();
        mails.forEach(async (mail) => {
            notificationService.email(
                mail.dataValues.email,
                mail.dataValues.subject,
                mail.dataValues.content
            )
            await notificationService.update(mail.dataValues.id, {status: "booked"});
        });
    });
}

module.exports = setupJob;