import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.imagePath = imagePath;
        this.name = name;
        this.description = desc;
        this.ingredients = ingredients;
    }
}
