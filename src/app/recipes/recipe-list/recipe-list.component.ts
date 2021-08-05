import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe("Omelette Jantasy", "Jantastic", "https://d1uz88p17r663j.cloudfront.net/resized/63d4cbc9faeca63292e512a33a86bf34_OMELETTE_DE_CHORIZO_CON_QUESO_150_1200_600.jpg"), new Recipe("Omelette Mariah Paris", "Breakfast Eleganza", "https://d1uz88p17r663j.cloudfront.net/resized/63d4cbc9faeca63292e512a33a86bf34_OMELETTE_DE_CHORIZO_CON_QUESO_150_1200_600.jpg")];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
