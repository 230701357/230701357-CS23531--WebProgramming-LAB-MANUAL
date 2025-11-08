const User = require('../models/userModel');

const getUserByUsernameAndPassword = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(200).json({ message: 'Invalid Credentials' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserByUsernameAndPassword,
  addUser,
  getAllUsers
};

