const NotificationRepository = require("../repositories/notification-repository");
const sendEmail = require("../config/email-config");
const notificationRepository = new NotificationRepository();

class NotificationService {

    email = async (mailTo, mailSubject, mailBody) => {
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

    subscribeEvent = async(payload) => {
        try {
            if(payload.service == "CREATE_TICKET") {
                const response = await this.create(payload.data);
                return response;
            }
            else if(payload.service == "SEND_TICKET") {
                const mail = await this.email(payload.data.email, payload.data.subject, payload.data.content);
                return mail;
            }
            throw {error: "Some other service"};
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    create = async(data) => {
        try {
            const response = await notificationRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    get = async(id) => {
        try {
            const response = await notificationRepository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    getAll = async() => {
        try {
            const response = await notificationRepository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    destroy = async(id) => {
        try {
            await notificationRepository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    update = async(id, data) => {
        try {
            await notificationRepository.update(id, data);
            return true;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = NotificationService;