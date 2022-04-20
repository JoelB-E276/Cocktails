import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, Subscription } from "rxjs";
import { Cocktail } from '../feature/cocktail';


@Component({
  selector: 'app-cocktail-recipe',
  templateUrl: './cocktail-recipe.component.html',
  styleUrls: ['./cocktail-recipe.component.css']
})
export class CocktailRecipeComponent implements OnInit {
  cocktail = <any>[];
  drink =<any>[];


  constructor(private route: ActivatedRoute, 
    private router: Router,
    private urlService: ConfigUrlService) { }

  ngOnInit(): void {
/** Same param ['id'] in the app-routing.module.module.ts  */
    const cocktailId = this.route.snapshot.params['id'];
    this.drink = this.urlService.getCocktailById(cocktailId)
      .subscribe(
        (result) => { 
          this.cocktail = result  
          console.log(this.cocktail);                      
        }
    ); 
  }
/** Import Router to use "NavigateByUrl" */
  cocktailRecipe() {
    this.router.navigateByUrl(`CocktailRecipe/${this.cocktail}`);
  }

 }
