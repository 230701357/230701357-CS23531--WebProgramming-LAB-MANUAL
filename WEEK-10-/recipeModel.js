const mongoose = require('mongoose');

const nutritionalInfoSchema = new mongoose.Schema({
  calories: { type: Number },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number }
}, { _id: false });

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  prepTimeInMinutes: { type: Number, required: true, min: 1 },
  cookTimeInMinutes: { type: Number, required: true, min: 1 },
  servings: { type: Number, required: true, min: 1 },
  cuisine: {
    type: String,
    enum: ['Italian', 'French', 'American', 'Indian', 'Thai', 'Chinese', 'Mexican'],
    required: false
  },
  ingredients: {
    type: [String],
    required: true,
    validate: [arr => arr.length > 0, 'Ingredients cannot be empty']
  },
  instructions: {
    type: [String],
    required: true,
    validate: [arr => arr.length > 0, 'Instructions cannot be empty']
  },
  tags: { type: [String], required: false },
  notes: { type: String, required: false },
  nutritionalInfo: { type: nutritionalInfoSchema, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);


