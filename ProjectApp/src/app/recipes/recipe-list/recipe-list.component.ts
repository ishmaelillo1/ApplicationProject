import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('a Test Recipe','this is simply a test', 'https://steptohealth.com/wp-content/uploads/2015/04/japanese-food.jpg'),
    new Recipe('a Test Recipe 2','this is simply a test 2', 'https://steptohealth.com/wp-content/uploads/2015/04/japanese-food.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
