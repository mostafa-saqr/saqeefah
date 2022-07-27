import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  home = [1,1,1,1,1,1,1,1]
  constructor(private language:changeLanguageService,private translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('en');
   }

  ngOnInit(): void {
  }
changeLanguage(lang:string){
  this.language.changeLanguge(lang)
  this.translate.use(lang);
}

}
