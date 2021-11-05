import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Kebab', 'simply test test test', 'https://media.lavorincasa.it/company/30/29909/master.png'),
    new Recipe('Sushi', 'prova prova prova prova', 'https://media.lavorincasa.it/company/30/29909/master.png'),
    new Recipe('Carbonara', 'prova prova prova prova', 'https://media.lavorincasa.it/company/30/29909/master.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeChoosed(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }


}
