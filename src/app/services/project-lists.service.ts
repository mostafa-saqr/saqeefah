import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { APICallerService } from '../shared/services/apicaller.service';
import { RequestMethod } from '../shared/Enums/enums';
import { APIs } from '../shared/helper/APIs';
@Injectable()
export class ProjectAndListService  {
    
     appRootUrl = environment.appRoot;

    
    constructor(private http:HttpClient, private getAuth:AuthService, private callApi:APICallerService) {


    }

     
     requestOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + this.getAuth.getToken(),
        'Accept': 'text/plain',
      }),
    };
   
    getAllProjects(languageId:string){
var result = this.callApi.get(`api/Project/ProjectsWithImagesAndVideos?languageId=${languageId}`)
return result; 
    }

    uploadProjectImage(formData){
        
       return this.callApi.postWithAttachment(APIs.projects.AddAttachments,formData); 
    }



            
    getProjectDetails(languageId:string,projectId:any){
        return this.callApi.get(`api/Project/ProjectDetails?languageId=${languageId}&projectId=${projectId}`)

    }
    getCompareAppartmens(compareArray:[]){
        return this.http.post(`${this.appRootUrl}/api/Apartment/CompareApartments`,{apartmentIds:compareArray})
    }
}
    function POST(POST: any, arg1: string, fd: FormData, arg3: string) {
        throw new Error('Function not implemented.');
    }

