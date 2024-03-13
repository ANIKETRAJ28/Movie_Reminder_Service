const NotificationService = require("../services/notification-service");

const notificationService = new NotificationService();

const sendMail = async (req, res) => {
    try {
        const response = await notificationService.email(req.body.mailTo, req.body.mailSubject, req.body.mailBody);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully made the notification",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to make the notification",
            err: error
        });
    }
}

const create = async (req, res) => {
    try {
        const response = await notificationService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the notification",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to created the notification",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await notificationService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched the notification",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch the notification",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await notificationService.getAll();
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched notifications",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch notifications",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await notificationService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted notifications",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete notifications",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    sendMail
}