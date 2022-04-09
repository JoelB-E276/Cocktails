import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigUrlService {
  
 /* private url = <string> 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  */ 
  private url = <string> 'https://www.thecocktaildb.com/api/json/v1/1/';
   
  private filterByIngredient = <string> 'filter.php?i=';

  private urlCocktailById = <string> 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  constructor(public http: HttpClient) { }

 /*  getData(): Observable <any> {
    return this.http.get(this.url)
  }
 */
  getCocktailsByIngredientName(ingredient: any) {
    return this.http.get<any>(this.url + this.filterByIngredient + ingredient)
  }
  
  getCocktailById(cocktailId: string) {
    return this.http.get<any>(this.urlCocktailById + cocktailId)
  }
}


/* Par verre https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'; 
Par ingredient 100    www.thecocktaildb.com/api/json/v1/1/list.php?i=list
Alcool ou non         www.thecocktaildb.com/api/json/v1/1/list.php?a=list
Catégorie                                                          c=list 
1{ "drinks": [ { "strCategory": "Ordinary Drink" }, { "strCategory": "Cocktail" }, { "strCategory": "Shake" }, 
{ "strCategory": "Other/Unknown" }, { "strCategory": "Cocoa" }, { "strCategory": "Shot" }, { "strCategory": "Coffee / Tea" },
 { "strCategory": "Homemade Liqueur" }, { "strCategory": "Punch / Party Drink" }, { "strCategory": "Beer" }, { "strCategory": "Soft Drink" } ] }
--------------- 
par ingredient 100 voir diff ? www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin*/