import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:string;
   email:string;
  constructor(private language:changeLanguageService,private router: Router, private auth: AuthService,private translate: TranslateService) {
  //this.translate.setDefaultLang('en');
     this.translate.use('ar')

  }

  ngOnInit(): void {
    this.user=this.auth.getUsername();
    this.email=this.auth.getUseremail();
    this.language.changeLanguageStatus.subscribe((data)=>{
      // the lang to use, if the lang isn't available, it will use the current loader to get them

      this.ngOnInit()
  console.log('language status from dashbao')

   })

  }

  logout(){

    this.auth.logoutUser();
    this.router.navigateByUrl('/login');

  }

}
