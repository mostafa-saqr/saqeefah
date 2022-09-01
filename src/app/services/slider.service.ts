import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APICallerService } from '../shared/services/apicaller.service';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  appRootUrl = environment.appRoot;


  constructor(private callApi: APICallerService) {

       }

  getAllSliders(languageId:any):Observable<any>{
    return this.callApi.get(`api/Slider?languageId=${languageId}`)
  }
  setSlider(body:any):Observable<any>{
    return this.callApi.post(`api/Slider`,body)
  }
  setSliderAttatchement(body:any):Observable<any>{
    return this.callApi.post(`api/Slider/Attachments`,body)
  }
  deleteSliderAttachment(id:any):Observable<any>{
    return this.callApi.delete(`api/Slider/Attachments`,id)

  }


  
 


}
