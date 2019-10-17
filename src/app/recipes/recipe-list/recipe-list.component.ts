import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('testRecipe','Testing Model','https://thumbs.dreamstime.com/z/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-papad-dal-sabji-jira-alu-rice-saffron-dark-138549999.jpg'),
    new Recipe('Another test','Testing Model','https://thumbs.dreamstime.com/z/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-papad-dal-sabji-jira-alu-rice-saffron-dark-138549999.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeEl:Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }
}
