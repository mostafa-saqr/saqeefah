import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APICallerService } from 'src/app/shared/services/apicaller.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  appRootUrl = environment.appRoot;
    
  constructor(private http:HttpClient) {

  }


   setSetting(model:any):Observable<any>{
    return this.http.post<any>(`${this.appRootUrl}/api/Setting`,model);
}

          
  getsettingsById(Id:any){

      return this.http.get(`${this.appRootUrl}/api/Setting?settingTypeId=${Id}`)

  }
  getAllsettings(){
    return this.http.get(`${this.appRootUrl}/api/Setting`)

  }
  getAllsettingsType(){
    return this.http.get(`${this.appRootUrl}/api/Setting/AllSettingTypes`)

  }
  
 
}
