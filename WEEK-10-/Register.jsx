import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

return (
    <div>
      <h2>Register for Cookistry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
          {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
