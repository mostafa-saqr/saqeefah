import { Component, OnInit, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logo-slider-one',
  templateUrl: './logo-slider-one.component.html',
  styleUrls: ['./logo-slider-one.component.scss']
})
export class LogoSliderOneComponent implements OnInit {
@Input() logos= [];
appRootUrl=environment.appRoot+'/';

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  autoWidth:false,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed:300,
  navText: ['', ''],
  rtl:this.language.checkRtl(),
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

  constructor(private language:changeLanguageService) { }

  ngOnInit(): void {
  }

}
