import { Component, AfterViewInit ,OnInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { HttpClient } from '@angular/common/http';
import { RestService } from '@app/services/rest.service';
import { SwiperOptions } from 'swiper';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    public restService:RestService,
    public script:ScriptService,
    public yeoman:Yeoman
  ){
    this.script.load(
     'popper',
     'bootstrap',
     'select',
     'wow',
     'counterup',
     'fancybox',
     'perfect-scrollbar',
     'slick',
     'particles',
     'particle-int',
     'custom'
          )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error));  
                  
    this.restService.getAllProducts().subscribe((response:any) => {
    console.log(response);
    this.yeoman.products=response;
  }) ;   4
         
  }
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  


  ngAfterViewInit(): void {

  } 

}
