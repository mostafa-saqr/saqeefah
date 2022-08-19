import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
@Injectable()
export class ProjectAndListService  {
    
    public appRoot = environment.appRoot;

    
    constructor(private http:HttpClient, private getAuth:AuthService) {


    }

    
     requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getAuth.getToken(),
      }),
    };
   
    getAllProjects(languageId:string){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/GetProjects?languageId=${languageId}`, this.requestOptions)
    }
    getProjectDetails(languageId:string,projectId:any){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/ProjectDetails?languageId=${languageId}&projectId=${projectId}`)

    }
    getCompareAppartmens(compareArray:[]){
        return this.http.post('https://api-stage.saqeefah.com/api/Apartment/CompareApartments',{apartmentIds:compareArray})
    }
}
