import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { APICallerService } from '../shared/services/apicaller.service';
import { RequestMethod } from '../shared/Enums/enums';
@Injectable()
export class ProjectAndListService  {
    
    public appRoot = environment.appRoot;

    
    constructor(private http:HttpClient, private getAuth:AuthService, private callApi:APICallerService) {


    }

    
     requestOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + this.getAuth.getToken(),
        Accept: 'text/plain',
      }),
    };
   
    getAllProjects(languageId:string){
return this.callApi.get(`api/Project/ProjectsWithImagesAndVideos?languageId=${languageId}`)
        // return this.http.get(`https://api-stage.saqeefah.com/api/Project/GetProjects?languageId=${languageId}`, this.requestOptions)
    }
    uploadProjectImage(formData){
        
        
        return this.http.post(`https://api-stage.saqeefah.com/api/Project/Attachments`,formData,
        {
            
             headers:this.requestOptions.headers
            }
             )
             
    }
            
    getProjectDetails(languageId:string,projectId:any){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/ProjectDetails?languageId=${languageId}&projectId=${projectId}`)

    }
    getCompareAppartmens(compareArray:[]){
        return this.http.post('https://api-stage.saqeefah.com/api/Apartment/CompareApartments',{apartmentIds:compareArray})
    }
}
    function POST(POST: any, arg1: string, fd: FormData, arg3: string) {
        throw new Error('Function not implemented.');
    }

