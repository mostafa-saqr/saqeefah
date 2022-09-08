import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { pickList } from 'src/app/pages/placeorder/placeorder.component';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { PlaceOrderService } from 'src/app/services/placeOrder.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() search: any;
  @Input() searchAbout: any;
  @Input() propList: any;
  @Input() allProp: any[];

  
  @Output() obj = new EventEmitter<{}>();
  AllProjects: [] = []
  // AllProperties: [] = [];
  FilteredProject?= [];
  FilteredProperty = [];

  public cities: string[] = [];
  public status: string[] = [];
  public districts: string[] = [];
  public prices:string[] = [];
  public statusProp: string[] = [];
  public projects:pickList[]=[] as pickList[];
  public apartmentsStatus:pickList[]=[] as pickList[];


  public form: FormGroup = new FormGroup({
    city: new FormControl(),
    status: new FormControl(),
    district: new FormControl(),
    building: new FormControl(),
    appartment: new FormControl(),
    


  });
  public form1: FormGroup = new FormGroup({
    projectId:new FormControl('all'),
    status:new FormControl('all'),

    price: new FormControl(null),
    totalArea:new FormControl(null),
    internalStation:new FormControl(null),
    bedroom: new FormControl(null),
    dressRoom: new FormControl(null),

    serventRoom: new FormControl(null),
    
    store: new FormControl(null),
    roof: new FormControl(null),
    salon: new FormControl(null),

    p_Intrance: new FormControl(null)

    // status: new FormControl('all'),
  });




minPrice:any;
maxPrice:any;
priceStep:any;
minArea:any;
maxArea:any;
areaStep:any;

  constructor(private projectsService: ProjectAndListService, private language: changeLanguageService
    ,private service:PlaceOrderService) {
    // this.initializeFormGroup();
    // this.initializeFormGroup1();
    // this.getAllProjects();
    // this.getAllProperties();

  }

  ngOnInit(): void {
    // this.getAllProjects();
    if(this.loadData)
    {
      this.loadProjects();
      this.loadStatus();
  
      this.minPrice=environment.minPrice;
      this.maxPrice=environment.maxprice;
      this.priceStep=environment.priceStep;
      this.minArea=environment.minArea;
      this.maxArea=environment.maxArea;
      this.areaStep=environment.areaStep;
    }
    else{
      this.ApplyFilterProperty();
    }

    this.language.changeLanguageStatus.subscribe((data) => {
       this.loadProjects();
       this.loadStatus();

      // this.getAllProperties();
    })
  }
  loadProjects(){
    this.projects=[] as pickList[];
    this.service.getAllProjects(this.language.getLanguageID()).subscribe(res=>{
      
      if(!res.isError)
      {
        if(res.result.data.length>0)
        {
          res.result.data.forEach(element => {
            let item:pickList={} as pickList;
            item.id=element.projectId
            item.value=element.projectName
            this.projects.push(item);
    
          });
        
    
        }
      }
      else{
        // this.toastr.error(res.result.message);
      }
    })

  }
  loadStatus(){
    this.apartmentsStatus=[] as pickList[];
    this.service.getAllApartmentStatus(this.language.getLanguageID()).subscribe(res=>{
      
      if(!res.isError)
      {
        if(res.result.data.length>0)
        {
          res.result.data.forEach(element => {
            let item:pickList={} as pickList;
            item.id=element.id
            item.value=element.name
            this.apartmentsStatus.push(item);
    
          });
        
    
        }
      }
      else{
        // this.toastr.error(res.result.message);
      }
    })

  }


  // getAllProjects() {
  //   this.projectsService.getAllProjects(this.language.getLanguageID()).subscribe((response: any) => {
  //     this.AllProjects = response.result.data
  //     response.result.data.forEach((element) => {
  //       if (this.cities.indexOf(element.city) === -1) {
  //         this.cities.push(element.city);
  //         // console.log('x city:',this.cities)
  //       }

  //       if (this.status.indexOf(element.status) === -1) {
  //         this.status.push(element.status);
  //         //console.log('x status:',this.status)
  //       }
  //       if (this.districts.indexOf(element.district) === -1) {
  //         this.districts.push(element.district);

  //         // console.log('x districts:',this.districts)
  //       }



  //     })



  //     // this.Total= response.result.data.length;
  //     // console.log('all projects',this.AllProjects)


  //   })
  // }


  getAllProperties() {
  //   this.projects.getAllProperties().subscribe((response: any) => {
  //     this.all = response.result.data
    
  //     response.result.data.forEach((element) => {
  //       if (this.prices.indexOf(element.apartment_Price) === -1) {
  //         this.prices.push(element.apartment_Price);
  //         // console.log('x city:',this.cities)
  //       }

  //       if (this.statusProp.indexOf(element.status) === -1) {
  //         this.statusProp.push(element.status);
  //         //console.log('x status:',this.status)
  //       }

  //   })
  // })

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






  // ApplyFilterProperty() {
  //   if(this.form1.value){
  //   this.FilteredProperty = [];
     
  
  //   let formdata = {
  //     price: this.form1.value.price,
  //     bedroom: this.form1.value.bedroom,
  //     hall: this.form1.value.hall,
  //     salon: this.form1.value.salon,
  //     floor: this.form1.value.floor,
  //     status: this.form1.value.status,
  //   }

  //   if(this.propList){
  //     this.FilteredProperty  = this.propList.filter((x:any) => {
  //       //  if(formdata.price == x.apartment_Price ||formdata.bedroom ==  x.bed_Room_Num ||  formdata.hall == x.hall  || formdata.salon == x.salon|| formdata.floor == x.floor_Num ){
          
  //       //     return x;
            

       
  //       //   }
  //       if(
  //         (x.apartment_Price  >= formdata.price)&&
  //         (formdata.bedroom == null || formdata.bedroom ==  x.bed_Room_Num)&&
  //         (formdata.hall==null || formdata.hall == x.hall)&&
  //         (formdata.salon == null || formdata.salon == x.salon)&&
  //         (formdata.floor==null || formdata.floor == x.floor_Num)&&
  //         (formdata.status == 'all' || formdata.status ==  x.status)
  //       )
  //        { 
         
  //           return x;
            
  //         }
         
  //       });
  //   }else{
  
  //   this.FilteredProperty  = this.allProp.filter((x:any) => {
  //   //  if(formdata.price == x.apartment_Price ||formdata.bedroom ==  x.bed_Room_Num ||  formdata.hall == x.hall  || formdata.salon == x.salon|| formdata.floor == x.floor_Num ){
      
  //   //     return x;
        
  //   console.log('form status',formdata.status)
   
  //   //   }
  //   if(
  //     (x.apartment_Price  >= formdata.price)&&
  //     (formdata.bedroom == null || formdata.bedroom ==  x.bed_Room_Num)&&
  //     (formdata.hall==null || formdata.hall == x.hall)&&
  //     (formdata.salon == null || formdata.salon == x.salon)&&
  //     (formdata.floor==null || formdata.floor == x.floor_Num)&&
  //     (formdata.status == 'all' || formdata.status ==  x.status)
  //   )
  //    { 
     
  //       return x;
        
  //     }
     
  //   });
  // }
   

  //   console.log('filtered obj:', this.FilteredProperty );
  //   // this.form1.reset();
  //   // this.initializeFormGroup1();


  //  this.obj.emit(this.FilteredProperty );
  // }
  // else{
  //   this.obj.emit(this.allProp);
  // }

  // }

  ApplyFilterProperty(){
    let minPrice=this.form1.value.price-environment.priceRange;
    let maxPrice=this.form1.value.price+environment.priceRange;
    let minArea=this.form1.value.totalArea-environment.areaRange;
    let maxArea=this.form1.value.totalArea+environment.areaRange;
      this.FilteredProperty=[] ;
      this.FilteredProperty=this.allProp.filter(x=>{



     return (this.form1.value.projectId=='all'?x.project_Ref:this.form1.value.projectId==x.project_Ref) &&
        (this.form1.value.price==null?x.apartment_Price:(x.apartment_Price>=minPrice && x.apartment_Price<=maxPrice)) &&
         (this.form1.value.totalArea==null?(x.apartment_Space+x.additional_Space):((x.apartment_Space+x.additional_Space+x.basic_Space)>=minArea && (x.apartment_Space+x.additional_Space+x.basic_Space)<=maxArea)) &&
       (this.form1.value.bedroom==null?x.bed_Room_Num:this.form1.value.bedroom==x.bed_Room_Num) &&
         (this.form1.value.internalStation==null?x:this.form1.value.internalStation==x.parking) &&
         (this.form1.value.serventRoom==null?x:this.form1.value.serventRoom==x.servant_Room) &&
         (this.form1.value.store==null?x:this.form1.value.store==x.store) &&
         (this.form1.value.roof==null?x:this.form1.value.roof==x.roof) &&
       (this.form1.value.salon==null?x:this.form1.value.salon==x.salon) &&
        (this.form1.value.p_Intrance==null?x:this.form1.value.p_Intrance==x.p_Intrance) &&
       (this.form1.value.status=='all'?x.statusId:this.form1.value.status==x.statusId);

      });
      console.log("filtered : ",this.FilteredProperty)
      this.obj.emit(this.FilteredProperty);
  }
  clearFilter(){
      this.form1.patchValue({
        projectId:'all',
        status:'all',
    
        price: null,
        totalArea:null,
        internalStation:null,
        bedroom: null,
        dressRoom: null,
    
        serventRoom: null,
        
        store: null,
        roof: null,
        salon: null,
    
        p_Intrance: null


    })
this.loadData=false;
    this.ngOnInit()
  }
loadData=true;








  initializeFormGroup() {
    this.form.setValue({
      city: '',
      status: '',
      district: '',
      building: null,
      appartment: null,


    })
  }

  // initializeFormGroup1() {
  //   this.form1.setValue({
  //     price: '',
  //     hall: null,
  //     salon: null,
  //     bedroom: null,
  //     floor: null,
  //     status: '',


  //   })
  // }









}
