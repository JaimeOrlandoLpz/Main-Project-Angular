import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe-list/recipe.model";

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe("Omelette Jantasy",
         "Jantastic", 
         "https://d1uz88p17r663j.cloudfront.net/resized/63d4cbc9faeca63292e512a33a86bf34_OMELETTE_DE_CHORIZO_CON_QUESO_150_1200_600.jpg",
         [
            new Ingredient('Tomato', 6),
            new Ingredient('Lettuce', 0.5)
         ]),
     new Recipe("Omelette Mariah Paris", 
     "Breakfast Eleganza", 
     "https://st.depositphotos.com/1030624/2429/i/600/depositphotos_24294999-stock-photo-omelette-with-salad.jpg",
     [
         new Ingredient('Onion', 3),
         new Ingredient('Potato', 1)
     ])
    ];

    getRecipes(){
        return this.recipes.slice(); // We add the slice() to return a copy and not the original
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}