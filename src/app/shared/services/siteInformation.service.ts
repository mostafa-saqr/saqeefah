import { Injectable } from '@angular/core';
import { APICallerService } from './apicaller.service';

@Injectable()
export class siteInformationService {

  constructor(private caller:APICallerService) {

  }
  public getAllInformation(lang:any){
    
    return this.caller.get("api/WebsiteInformationSetting/GetAllWebsiteInformationSetting?languageId="+lang,false);
  }
  public postInformation(model:any){
    // {
    //     "key": "workinfHours",
    //     "valueAr": "Saturday to Thursday: 9 AM - 8 PM",
    //     "valueEn": "ُSaturday to Thursday: 9 AM - 8 PM"
    //   }
    return this.caller.post("api/WebsiteInformationSetting/AddWebsiteInformationSetting",model,false);
  }
  public getInfoByKey(key:any,lang:any){
    return this.caller.get("api/WebsiteInformationSetting/GetWebsiteInformationSettingByKey?key="+key+"&languageId="+lang,false);
  }
}
