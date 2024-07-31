const salonModel = require('../models/salonModel');

const createSalon = async (req, res) => {
    try {
        const salonId = await salonModel.createSalon(req.body);
        res.status(201).json({ message: 'Salon created successfully', salonId });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getSalons = async (req, res) => {
    try {
        const salons = await salonModel.getSalons();
        res.status(200).json(salons);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createSalon,
    getSalons
};
