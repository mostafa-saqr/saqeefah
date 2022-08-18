import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class ProjectAndListService  {
    
    public appRoot = environment.appRoot;

    
    constructor(private http:HttpClient) {


    }
   
    getAllProjects(languageId:string){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/GetProjects?languageId=${languageId}`)
    }
    getProjectDetails(languageId:string,projectId:any){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/ProjectDetails?languageId=${languageId}&projectId=${projectId}`)

    }
    getCompareAppartmens(compareArray:[]){
        return this.http.post('https://api-stage.saqeefah.com/api/Apartment/CompareApartments',{apartmentIds:compareArray})
    }
}
