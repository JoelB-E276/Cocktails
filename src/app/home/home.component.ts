import { Component, Input, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Ingredientform: any

  constructor(public urlService: ConfigUrlService, private route: ActivatedRoute) { }

  ingredientName = <any>[];
  cocktailId = <any>[];

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.cocktailId = String(params.get('idDink'));
        console.log(this.cocktailId);
        return this.urlService.getCocktailById(this.cocktailId);
      })
    );    
  }


  getCocktails(ingredient: any) {
    let selectedIngredient = Object.values(ingredient);
    this.urlService.getCocktailsByIngredientName(selectedIngredient)     
      .subscribe(
          (result) => { 
            this.ingredientName = result  
            console.log(this.ingredientName);                      
          }
      );
  }

  getDrinkById(cocktailId: string) {
    this.urlService.getCocktailById(this.cocktailId)
      .subscribe(
        (result) => {
          this.cocktailId = result
          console.log(this.cocktailId);
          
        }
      )

  }  

  
}   
