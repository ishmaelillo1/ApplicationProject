import { Recipe } from './recipe.model';
import { /*EventEmitter, */ Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListSerivce } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe [] = [
    new Recipe(
      'Tasty Schnitzel',
      'this is a tasty Schintzel',
      'https://steptohealth.com/wp-content/uploads/2015/04/japanese-food.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Chesse burger',
      'this is simply a test 2',
      'https://steptohealth.com/wp-content/uploads/2015/04/japanese-food.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 1),
      ])
  ];
  constructor (private slService: ShoppingListSerivce) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe (index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
