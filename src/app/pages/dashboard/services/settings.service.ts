import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APICallerService } from 'src/app/shared/services/apicaller.service';
import { environment } from 'src/environments/environment';
import { Setting } from '../Model/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private aPICallerService:APICallerService) {
  }


   setSetting(body:any):Observable<any>{
   return this.aPICallerService.postWithAttachment(`api/Setting`,body,true);
}
          
  getsettingsById(settingTypeId:any){
      return this.aPICallerService.get(`api/Setting?settingTypeId=${settingTypeId}`)
  }

  getAllsettings(){
    return this.aPICallerService.get(`api/Setting/AllSettings`)
  }

  getAllsettingsType(){
    return this.aPICallerService.get(`api/Setting/AllSettingTypes`);
  }
  
 
}
