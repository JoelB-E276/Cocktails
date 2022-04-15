import { Component, Input, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

declare var showSelectMenu: any;
declare var hideSelectMenu: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Ingredientform: any

  constructor(public urlService: ConfigUrlService, 
    private route: ActivatedRoute,
    private router: Router) { }

  cocktail = <any>[];
  cocktailId = <any>[];

  ngOnInit(): void {
    new showSelectMenu();
    new hideSelectMenu();
    /* this.route.paramMap.pipe(
      switchMap(params => {
        this.cocktailId = String(params.get('data.idDrink'));
        return this.urlService.getCocktailById(this.cocktailId);
      })
    );     */
  }


  getCocktails(ingredient: any) {
    let selectedIngredient = Object.values(ingredient);
    this.urlService.getCocktailsByIngredientName(selectedIngredient)     
      .subscribe(
          (result) => { 
            this.cocktail = result  
            console.log(this.cocktail);                      
          }
      );
  }

 /* getDrinkById(cocktailId: string) {
    console.log('getDrink'+ cocktailId);

    this.urlService.getCocktailById(this.cocktailId);
       .subscribe(
        (result) => {
          this.cocktailId = result
          console.log(this.cocktailId);
          
        }
      ) 
  }  
*/
  
}   
