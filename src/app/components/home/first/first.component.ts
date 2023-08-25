import { Component, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { CATEGORIES } from '@app/services/categories.services';
import { Category } from '@app/interfaces/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements AfterViewInit {
  categories:any;

  constructor(
    public yeoman:Yeoman
  ) 
  {
    this.categories=CATEGORIES
   }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngAfterViewInit(): void {
  }

}
