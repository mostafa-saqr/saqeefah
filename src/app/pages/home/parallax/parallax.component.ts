import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { siteInformationService } from 'src/app/shared/services/siteInformation.service';
import { siteInfo } from '../../Models/siteInfo';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  siteInformation:siteInfo;
  constructor(public language:changeLanguageService,private translate: TranslateService,
    private siteInfo:siteInformationService) {

   }

  ngOnInit(): void {
    this.getAllSiteInformation();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getAllSiteInformation();
    });

  }
  getAllSiteInformation(){
    this.siteInfo.getAllInformation(this.language.getLanguageID()).subscribe(x=>{
  
      if(!x.isError)
      {
        if(x.result['succeeded'])
        {
          this.siteInformation=x.result['data'];
        }
        else{
  
        }
      }
      
    })
  }

}
