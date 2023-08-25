import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  isLoaded:Boolean=false;
  virtualRoute:string="first";
  categorySelected:string="first";
  products:any=[];
  preview:any={};
  categories:any={};
  allcategory:any=[];
  allCategoriesSize:number=0;
  cart:any;

  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.buckapi.us:9010",
    GQLUrl: "<origin GQL url>",
  };
  constructor() { }
}