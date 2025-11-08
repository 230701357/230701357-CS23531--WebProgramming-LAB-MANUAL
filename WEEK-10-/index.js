// nodeapp/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipeRouter = require('./routers/recipeRouter');
const userRouter = require('./routers/userRouter');
// optional auth router if you want to mount it; else call authUtils directly
const authStubRouter = require('./routers/authStubRouter');

const app = express();
app.use(cors());
app.use(express.json());

// mount under /api to match many tests
app.use('/api/recipes', recipeRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authStubRouter);

// root
app.get('/', (req, res) => res.json({ message: 'Cookistry API' }));

// try to connect to Mongo if MONGO_URI provided; but tests can run even without DB
const MONGO = process.env.MONGO_URI || process.env.MONGO || null;
if (MONGO) {
  mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo connected'))
    .catch((err) => console.warn('Mongo connection failed:', err.message));
}

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

module.exports = app;
