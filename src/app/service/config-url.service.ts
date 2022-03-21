import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigUrlService {
  
  private url = <string> 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
  private urlCocktailById = <string> 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=428';

  constructor(public http: HttpClient) { }

 /*  getData(): Observable <any> {
    return this.http.get(this.url)
  }
 */
  getCocktailsByIngredientName(){
    return this.http.get<any>(this.url)
  }
  
  getCocktailById(){
    return this.http.get<any>(this.urlCocktailById)
  }
}


/* Par verre https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'; 
Par ingredient 100    www.thecocktaildb.com/api/json/v1/1/list.php?i=list
Alcool ou non         www.thecocktaildb.com/api/json/v1/1/list.php?a=list
Catégorie                                                          c=list
par ingredient 100 avoir diff ? www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin*/