import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APICallerService } from 'src/app/shared/services/apicaller.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private aPICallerService:APICallerService) {
  }


   setSetting(model:any):Observable<any>{
   // return this.http.post<any>(`${this.appRootUrl}/api/Setting`,model);
   return this.aPICallerService.post(`api/Setting`,model,true);
}
          
  getsettingsById(Id:any){
      return this.aPICallerService.get(`api/Setting?settingTypeId=${Id}`)
  }

  getAllsettings(){
    return this.aPICallerService.get(`api/Setting`)
  }

  getAllsettingsType(){
    return this.aPICallerService.get(`api/Setting/AllSettingTypes`);
  }
  
 
}
