const userModel = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const userId = await userModel.createUser(req.body);
        res.status(201).json({ message: 'User created successfully', userId });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.getUserByEmail(email);
        if (user && user.password_hash === password) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    loginUser
};
