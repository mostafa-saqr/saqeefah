import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { changeLanguageService } from './services/changeLanguage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'saqeefah';
constructor(public translate: TranslateService,private lang:changeLanguageService){

}
ngOnInit(): void {

  this.lang.changeLanguge(environment.lang);
  // this.translate.use(environment.lang)
}

}
