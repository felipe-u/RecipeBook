import {  Injectable } from "@angular/core";


import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {


  private recipes : Recipe[] = [
    new Recipe(

      'Arepa con hogao',
      'Delicious traditional arepa with hogao.',
      'https://www.mycolombianrecipes.com/wp-content/uploads/2009/04/Arepa-con-Hogao.jpg',
      [
        new Ingredient('Arepa', 1),
        new Ingredient('Onions', 0.5),
        new Ingredient('Tomatoes', 1)
      ]),
    new Recipe(

      'Cake',
      'Delicious cake',
      'https://corbuse.edu.mx/blog/wp-content/uploads/2020/06/original-96183a841ff8b9c24841018fe45f02da.jpg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Flour', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
    // const recipe = this.recipes.find(
    //   (r) => {
    //     return r.id === id;
    //   }
    // );
    // return recipe;
  }

  passIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
