import { Component, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ingredientName = <any>[];
  cocktailId = <any>[];
  /* cocktails: */

  constructor(public urlService: ConfigUrlService) { }

  ngOnInit(): void {}

  getCocktails() {
    this.urlService.getCocktailsByIngredientName()     
      .subscribe(
          (result) => { 
            this.ingredientName = result  
            console.log(this.ingredientName);                      
          }
      );    
  }

  getCocktailById() {
    this.urlService.getCocktailById()
      .subscribe(
        (result) => {
          this.cocktailId = result
          console.log(this.cocktailId);
          
        }
      )

  }  

  
}   
