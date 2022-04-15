import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterTestingModule } from '@angular/router/testing';

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
/*      same param in the app-RouterTestingModule.module.ts  ['id']*/
     const cocktailId = this.route.snapshot.params['id'];
    
    this.cocktail = this.urlService.getCocktailById(cocktailId)
      .subscribe(
        (result) => { 
          this.cocktail = result  
          console.log(this.cocktail);                      
        }
    );
    console.log(this.cocktail); 
    
  }

  cocktailRecipe() {
    this.router.navigateByUrl(`CocktailRecipe/${this.cocktail.data.idDrink}`);
  }
}
