
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(public language:changeLanguageService,private translate: TranslateService,
    public favorite:FavoritesService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('en');
   }

  ngOnInit(): void {
   this.favorite.changeFavoriteStatus.subscribe((value)=>{
    this.favorite.checkFavoritesCounter()
   })
  }
 
changeLanguage(lang:string){
  this.language.changeLanguge(lang)
  this.translate.use(lang);
}
getPageLang(){

}

}
