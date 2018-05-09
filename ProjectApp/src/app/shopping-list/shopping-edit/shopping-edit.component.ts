import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListSerivce } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
//patern for numbers <!-- [pattern]="'^[1-9]+[0-9]*$'" -->
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  name: string;
  amount: number;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListSerivce) { }

  ngOnInit() {
    this.subscription = this.slService.
          startedEditing.subscribe(
            (index: number) => {
              this.editMode = true;
              this.editedItemIndex = index;
              this.editedItem = this.slService.getIngredient(index);
              this.slForm.setValue( {
                name: this.editedItem.name,
                amount: this.editedItem.amount
              })
            }
          );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.AddIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
}
