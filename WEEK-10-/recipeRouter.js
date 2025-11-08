const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipeController');

router.get('/', recipeCtrl.getAllRecipes);
router.post('/', recipeCtrl.addRecipe);
router.put('/:id', recipeCtrl.updateRecipe);
router.delete('/:id', recipeCtrl.deleteRecipe);
router.get('/:id', recipeCtrl.getRecipeById);
router.get('/user/:userId', recipeCtrl.getRecipesByUserId);

module.exports = router;

