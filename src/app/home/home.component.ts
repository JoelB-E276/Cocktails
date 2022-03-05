import { Component, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* cocktails: */

  constructor(public urlService: ConfigUrlService) { }

  ngOnInit(): void {
    }

  getCocktails() {
    let data = this.urlService.getData();
    console.log(data);
    
    return data;
  }
} 
