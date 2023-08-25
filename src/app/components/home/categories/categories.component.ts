import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { CATEGORIES } from '@app/services/categories.services';
import { Category } from '@app/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;

  constructor(
    public yeoman:Yeoman
  ) 
  {
    this.categories=CATEGORIES
   }
   setCategory(i:any){
    let indice= i;
    this.yeoman.categorySelected=this.categories[indice].idCategory;
    this.yeoman.virtualRoute="shop";
   }
  ngOnInit(): void {
  }

}
