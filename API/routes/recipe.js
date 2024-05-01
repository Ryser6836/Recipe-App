import express from "express";
import { add, getAllRecipe, getRecipeById, getRecipeByUserId} from "../controllers/recipe.js";

const router = express.Router();

// create recipe
router.post('/add',add)

// get all recipe
router.get('/',getAllRecipe)

// get recipe by id
router.get('/:id',getRecipeById)

// get recipe by userid
router.get('/user/:id',getRecipeByUserId)

export default router;