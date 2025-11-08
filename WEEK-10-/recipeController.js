const Recipe = require('../models/recipeModel');

const getAllRecipes = async (req, res) => {
  try {
    const sortOrder = req.body.sortOrder || 1;
    const recipes = await Recipe.find().sort({ title: sortOrder });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    await Recipe.create(req.body);
    res.status(200).json({ message: 'Recipe Added Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe Updated Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecipesByUserId = async (req, res) => {
  try {
    const { userId, category } = req.body;
    const query = { userId };
    if (category) query.category = category;

    const recipes = await Recipe.find(query);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
  getRecipesByUserId
};


