const NotificationRepository = require("../repositories/notification-repository");
const { sendEmail } = require("../config/email-config");

const notificationRepository = new NotificationRepository();

class NotificationService {

    async email(mailTo, mailSubject, mailBody) {
        try {
            const response = await sendEmail.sendMail({
                to: mailTo,
                subject: mailSubject,
                text: mailBody
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await notificationRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await notificationRepository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await notificationRepository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await notificationRepository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = NotificationService;