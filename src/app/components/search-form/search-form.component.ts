import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() search: any;
  @Input() searchAbout: any;
  @Input() proId: any;
  @Output() obj = new EventEmitter<{}>();
  AllProjects: [] = []
  AllProperties: [] = [];
  FilteredProject?= [];
  FilteredProperty = [];

  public cities: string[] = [];
  public status: string[] = [];
  public districts: string[] = [];
  public prices:string[] = [];
  public statusProp: string[] = [];
  

  public form: FormGroup = new FormGroup({
    city: new FormControl(),
    status: new FormControl(),
    district: new FormControl(),
    building: new FormControl(),
    appartment: new FormControl(),
    


  });
  public form1: FormGroup = new FormGroup({
    price: new FormControl(''),
    bedroom: new FormControl(null),
    hall: new FormControl(null),
    floor: new FormControl(null),
    salon: new FormControl(null),
    status: new FormControl(),
  });





  constructor(private projects: ProjectAndListService, private language: changeLanguageService) {
    // this.initializeFormGroup();
    // this.initializeFormGroup1();
    this.getAllProjects();
    this.getAllProperties();

  }

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllProperties();
    this.language.changeLanguageStatus.subscribe((data) => {
      this.getAllProjects();
      this.getAllProperties();
    })
  }


  getAllProjects() {
    this.projects.getAllProjects(this.language.getLanguageID()).subscribe((response: any) => {
      this.AllProjects = response.result.data
      response.result.data.forEach((element) => {
        if (this.cities.indexOf(element.city) === -1) {
          this.cities.push(element.city);
          // console.log('x city:',this.cities)
        }

        if (this.status.indexOf(element.status) === -1) {
          this.status.push(element.status);
          //console.log('x status:',this.status)
        }
        if (this.districts.indexOf(element.district) === -1) {
          this.districts.push(element.district);

          // console.log('x districts:',this.districts)
        }



      })



      // this.Total= response.result.data.length;
      // console.log('all projects',this.AllProjects)


    })
  }


  getAllProperties() {
    this.projects.getAllProperties().subscribe((response: any) => {
      this.AllProperties = response.result.data
      response.result.data.forEach((element) => {
        if (this.prices.indexOf(element.apartment_Price) === -1) {
          this.prices.push(element.apartment_Price);
          // console.log('x city:',this.cities)
        }

        if (this.statusProp.indexOf(element.status) === -1) {
          this.statusProp.push(element.status);
          //console.log('x status:',this.status)
        }

    })
  })

  }



getFilterValue(filter){
  let filterdObject = {}
  for (var key in filter) {
        
    if (filter[key] != null ){
      filterdObject[key] = filter[key]
 
  }
  }
  return filterdObject
}



  ApplyFilterProject() {

    if(this.form.value){

 
     
    let formdata = {
      city: this.form.value.city,
      status: this.form.value.status,
      district: this.form.value.district,
      appartment: this.form.value.appartment,
      building: this.form.value.building,
    }


  
    // this.FilteredProject = this.AllProjects.filter((x:any) => {
    //  if(formdata.city == x.city && formdata.status ==  x.status  &&  formdata.district == x.district  && formdata.building == x.numberOfBuildings&& formdata.appartment == x.numberOfUnits )
    //  { 
    //     return x;
        
    //   }
     
     
    // });
    console.log(formdata)
   
    this.FilteredProject = this.AllProjects.filter((x:any) => {
     if(
      (formdata.city == null || formdata.city == x.city )&& 
      (formdata.status == null || formdata.status ==  x.status)&&
      (formdata.district==null || formdata.district == x.district)&&
      (formdata.building == null || formdata.building == x.numberOfBuildings)&&
      (formdata.appartment==null || formdata.appartment == x.numberOfUnits)
      )
     { 
        return x;
        
      }
     
     
    });
 


   this.obj.emit(this.FilteredProject);
  }
  else{
    this.obj.emit(this.AllProjects);
  }
  
  }






  ApplyFilterProperty() {
    debugger
    if(this.form1.value){
    this.FilteredProperty = [];
     
  
    let formdata = {
      price: this.form1.value.price,
      bedroom: this.form1.value.bedroom,
      hall: this.form1.value.hall,
      salon: this.form1.value.salon,
      floor: this.form1.value.floor,
      status: this.form1.value.status,
    }


  
    this.FilteredProperty  = this.AllProperties.filter((x:any) => {
    //  if(formdata.price == x.apartment_Price ||formdata.bedroom ==  x.bed_Room_Num ||  formdata.hall == x.hall  || formdata.salon == x.salon|| formdata.floor == x.floor_Num ){
      
    //     return x;
        

   
    //   }
    if(
      (x.apartment_Price  >= formdata.price)&&
      (formdata.bedroom == null || formdata.bedroom ==  x.bed_Room_Num)&&
      (formdata.hall==null || formdata.hall == x.hall)&&
      (formdata.salon == null || formdata.salon == x.salon)&&
      (formdata.floor==null || formdata.floor == x.floor_Num)&&
      (formdata.status == null || formdata.status ==  x.status)
    )
     { 
        return x;
        
      }
     
    });

   

    console.log('filtered obj:', this.FilteredProperty );
    // this.form1.reset();
    // this.initializeFormGroup1();


   this.obj.emit(this.FilteredProperty );
  }
  else{
    this.obj.emit(this.AllProperties);
  }

  }









  initializeFormGroup() {
    this.form.setValue({
      city: '',
      status: '',
      district: '',
      building: null,
      appartment: null,


    })
  }
  initializeFormGroup1() {
    this.form1.setValue({
      price: '',
      hall: null,
      salon: null,
      bedroom: null,
      floor: null,
      status: '',


    })
  }









}
