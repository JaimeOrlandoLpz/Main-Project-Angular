import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [new Ingredient("Apple", 2), new Ingredient("Banana", 4)];

   getIngredients(){
       return this.ingredients.slice(); // Return a copy of the array
   }

   addIngredient(ingredient: Ingredient){
       this.ingredients.push(ingredient);
       this.ingredientsChanged.emit(this.ingredients.slice()); // Inform that the ingredients array has changed so the compinents can update as well
   }

   addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
   }
}