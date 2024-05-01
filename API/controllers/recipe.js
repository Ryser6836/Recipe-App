import { Recipe } from "../Models/Recipe.js";

export const add = async (req, res) => {
    const {
        title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl} = 
        req.body;  
    try {
        const recipe = await Recipe.create({
            title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl,
        user: "662ff3b68f615ca4e35fdbde",
        });

        res.json({message:"Recipe added successfully",recipe});
     } catch (error) {
        res.json({message:error})
        
    }

}


export const getAllRecipe = async (req, res) => {
    const recipe = await Recipe.find();
    res.json({recipe})
}


export const getRecipeById = async (req, res) => {
    const id = req.params.id;

    try {
        let recipe = await Recipe.findById(id)
        
        if(!recipe) res.json({message: "Recipe does not exist"});

        res.json({message:"Recipe by id",recipe})

    } catch (error) {
        res.json({message:error})
        
    }
}

export const getRecipeByUserId = async (req, res) => {
    const userId = req.params.id;

    try {
        let recipe = await Recipe.find({user:userId})
        
        if(!recipe) res.json({message: "Recipe does not exist"});

        res.json({message:"Recipe by userid",recipe})

    } catch (error) {
        res.json({message:error})
        
    }
}

