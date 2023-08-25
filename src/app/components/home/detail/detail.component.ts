import { Component, OnInit ,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterViewInit {
  products:any=[];
  categories:any;
  constructor(
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman
  ) { }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
    view(id:any){
   let preview=this.yeoman.products[id];
    console.log("id: "+id+"preview name: ");
    console.log(JSON.stringify(preview));
    this.setRoute('cars');
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
 add ( product:any) {
  this.yeoman.cart.push(product);
 }

}
