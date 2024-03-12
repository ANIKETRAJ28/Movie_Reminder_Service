const { NotificationTicket } = require("../models/index");

class NotificationRepository {
    
    async create(data) {
        try {
            const response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await NotificationTicket.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await NotificationTicket.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = NotificationRepository;