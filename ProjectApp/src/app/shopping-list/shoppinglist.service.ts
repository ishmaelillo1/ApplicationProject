
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListSerivce {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient []= [
    new Ingredient('apple', 5),
    new Ingredient('tomatoes', 1),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  // addIngredients(ingredients: Ingredient[]) {
  //   for (let ingredient of ingredients) {
  //     this.addIngredients(ingredient);
  //   }
  // }
  addIngredients (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
