import { Component, Input, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';

declare var showSelectMenu: any;
declare var hideSelectMenu: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Ingredientform: any

  constructor(public urlService: ConfigUrlService) { }

  cocktail = <any>[];

  ngOnInit(): void {
    new showSelectMenu();
    new hideSelectMenu();
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
}   
