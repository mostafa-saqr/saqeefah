import { AfterViewInit, Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { changeLanguageService } from './services/changeLanguage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from './pages/dashboard/services/busy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'saqeefah';
constructor(public translate: TranslateService,private lang:changeLanguageService  , private loader : BusyService){
this.loader.busy();
}
ngOnInit(): void {

  this.lang.changeLanguge(environment.lang);
  // this.translate.use(environment.lang)
}

  ngAfterViewInit() {
    this.loader.idle();
  }



}
