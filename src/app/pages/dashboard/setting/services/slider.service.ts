import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/shared/services/Result';
import { environment } from 'src/environments/environment';
import { APICallerService } from '../../../../shared/services/apicaller.service';
import { ISlider, ISliderResponses } from '../models/slider.interface';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private callApi: APICallerService) {
  }

  getAllSliderByid(sliderId: number): Observable<Result<ISliderResponses>> {
    return this.callApi.get(`api/Slider/GetslidersByIdForAdmin?sliderId=${sliderId}`);
  }


  getAllSliders(languageId: any): Observable<any> {
    return this.callApi.get(`api/Slider?languageId=${languageId}`)
  }

  
  UpdateSlider(body: ISlider): Observable<any> {
    var formdata = new FormData();
    formdata.append("Id", body.Id.toString());
    formdata.append("IsActive", body.IsActive ? "true" : "false");
    formdata.append("TitleAr", body.TitleAr);
    formdata.append("TitleEn", body.TitleEn);
    formdata.append("DescriptionAr", body.DescriptionAr);
    formdata.append("DescriptionEn", body.DescriptionEn);
    return this.callApi.postFormData(`api/Slider/Editslider`, formdata)
  }

  setSliderAttatchement(body: any): Observable<any> {
    return this.callApi.post(`api/Slider/Attachments`, body)
  }
  deleteSliderAttachment(id: any): Observable<any> {
    return this.callApi.delete(`api/Slider/Attachments`, id)

  }






}
