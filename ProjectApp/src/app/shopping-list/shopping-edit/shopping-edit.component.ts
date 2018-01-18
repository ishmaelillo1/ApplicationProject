import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListSerivce } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')nameInputRef: ElementRef;
  @ViewChild('amountInput')amountInputRef: ElementRef;
  constructor(private slService: ShoppingListSerivce) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amName = this.amountInputRef.nativeElement.value;
    console.log('Amount:' + amName);
    const newIngredient = new Ingredient(ingName, amName);
    this.slService.AddIngredient(newIngredient);
  }
}
