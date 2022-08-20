import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav = {
    navtransparentMode:false
  } 
    home = [1,1,1,1,1,1,1,1]
    constructor(private language:changeLanguageService,private translate: TranslateService,
      public generalService:GenaricService
      ) {
      translate.setDefaultLang('en');
  
      // the lang to use, if the lang isn't available, it will use the current loader to get them
     translate.use('en');
     }
  
    ngOnInit(): void {
      this.nav.navtransparentMode = this.generalService.checkNavIsTRansparent();
    console.log( 'navbar mode',this.nav.navtransparentMode)
    }
   
  changeLanguage(lang:string){
    this.language.changeLanguge(lang)
    this.translate.use(lang);
  
  }

 
}
