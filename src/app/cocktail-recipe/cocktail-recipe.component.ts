import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cocktail-recipe',
  templateUrl: './cocktail-recipe.component.html',
  styleUrls: ['./cocktail-recipe.component.css']
})
export class CocktailRecipeComponent implements OnInit {
  cocktail = <any>[];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    public urlService: ConfigUrlService
    ) { }

  ngOnInit(): void {
    const cocktailId = this.route.snapshot.paramMap.get("idDrink");
    this.cocktail = this.urlService.getCocktailsByIngredientName(cocktailId);
  }
 /*  https://angular.io/guide/router
   
  ngOnInit() {
  this.heroes$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getHeroes();
    })
  );
}
  */
 cocktailRecipe(cocktail:any) {
   const cocktailId = cocktail ? cocktail.idDrink : null;
   this.router.navigate(['/CocktailRecipe', {idDrink: cocktailId}]);
 }
}
