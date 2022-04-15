import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfigUrlService } from '../service/config-url.service';


@Component({
  selector: 'app-cocktail-recipe',
  templateUrl: './cocktail-recipe.component.html',
  styleUrls: ['./cocktail-recipe.component.css']
})
export class CocktailRecipeComponent implements OnInit {
  cocktail = <any>[];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    public urlService: ConfigUrlService) { }

  ngOnInit(): void {
/** same param ['id'] in the app-routing.module.module.ts  */
     const cocktailId = this.route.snapshot.params['id'];
    
    this.cocktail = this.urlService.getCocktailById(cocktailId)
      .subscribe(
        (result) => { 
          this.cocktail = result  
          console.log(this.cocktail);                      
        }
    );
  }
/** Import Router to use "NavigateByUrl" */
  cocktailRecipe() {
    this.router.navigateByUrl(`CocktailRecipe/${this.cocktail.data.idDrink}`);
  }

 }
