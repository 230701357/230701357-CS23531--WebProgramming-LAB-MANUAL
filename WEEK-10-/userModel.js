const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    match: [/^\d{10}$/, 'Invalid mobile number format']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    maxlength: 255
  }
});

module.exports = mongoose.model('User', userSchema);



