import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigUrlService {
  
  private url = <string> 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  constructor(public http: HttpClient) { }

 /*  getData(): Observable <any> {
    return this.http.get(this.url)
  }
 */
  getData(){
   return this.http.get<any>(this.url)
    .subscribe(
      data => console.log(data)
    ); 
  } 
}
