import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigUrlService {
  
  private url = <string> 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka';

  constructor(public http: HttpClient) { }

 /*  getData(): Observable <any> {
    return this.http.get(this.url)
  }
 */
  getCocktailsByIngredientName(){
   return this.http.get<any>(this.url)
  } 
}
