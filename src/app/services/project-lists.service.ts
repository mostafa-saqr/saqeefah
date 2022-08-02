import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProjectAndListService  {
    
    constructor(private http:HttpClient) {


    }
   
    getAllProjects(languageId:string){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/GetProjects?languageId=${languageId}`)
    }
    getProjectDetails(languageId:string,projectId:any){
        return this.http.get(`https://api-stage.saqeefah.com/api/Project/ProjectDetails?languageId=${languageId}&projectId=${projectId}`)

    }
}
