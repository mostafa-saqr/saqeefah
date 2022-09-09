import { AfterViewInit, Component,OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { changeLanguageService } from './services/changeLanguage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from './pages/dashboard/services/busy.service';
import { SiteInformationSharedService } from './services/site-information-shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'saqeefah';
constructor(public translate: TranslateService,private lang:changeLanguageService  ,
   private loader : BusyService,private shared:SiteInformationSharedService){
this.loader.busy();
}
ngOnInit(): void {

  this.lang.changeLanguge(environment.lang);
  // this.shared.updateSiteInformation();
  this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.shared.updateSiteInformation();
    });

  // this.translate.use(environment.lang)
}

  ngAfterViewInit() {
    this.loader.idle();
  }



}
