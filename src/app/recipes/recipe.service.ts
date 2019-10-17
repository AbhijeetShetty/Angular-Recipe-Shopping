import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('testRecipe', 'Testing Model', 'https://thumbs.dreamstime.com/z/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-papad-dal-sabji-jira-alu-rice-saffron-dark-138549999.jpg'),
        new Recipe('Another test', 'Testing Model', 'https://thumbs.dreamstime.com/z/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-papad-dal-sabji-jira-alu-rice-saffron-dark-138549999.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}