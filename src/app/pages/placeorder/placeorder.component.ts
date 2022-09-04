
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { siteInfo } from 'src/app/pages/Models/siteInfo';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { PlaceOrderService } from 'src/app/services/placeOrder.service';
import { siteInformationService } from 'src/app/shared/services/siteInformation.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})



export class PlaceorderComponent implements OnInit,OnDestroy  {
  projects:pickList[]=[] as pickList[];
  paymentMethods:pickList[]=[] as pickList[];
  cities:pickList[]=[] as pickList[];
  districts:pickList[]=[] as pickList[];


  public myFormGroup: FormGroup = new FormGroup({
    interest_Date:new FormControl(new Date(),[]),
    project_Ref: new FormControl(0, []), //project Id from api
     building_Ref: new FormControl(0, []),   
     apartment_Ref: new FormControl(0, []),    
    client_Name: new FormControl('', [Validators.required]), //user input
    client_Mail: new FormControl('', [Validators.email]),  //user input
    client_Mobile: new FormControl('', [Validators.required]), //user input

    city: new FormControl(0, []),      //city id from api
    district: new FormControl(0, []),  //destrictId from api

    payment_Method: new FormControl(0, []),  // payment method is from api

    price_Avg: new FormControl(0, []),
    space_Avg: new FormControl(0, []),
    bed_Room: new FormControl(0, []),


    parking: new FormControl(0, []),
    terace: new FormControl(0, []),
    balcony: new FormControl(0, []),
    roof: new FormControl(0, []),
    store: new FormControl(0, []),
    servent_Room: new FormControl(0, []),

    additional_Reqst: new FormControl('', [])
  });


  constructor(private toastr: ToastrService,
    private language:changeLanguageService,
    private service:PlaceOrderService) { }

  ngOnInit(): void {
    this.loadProjects();
    this.loadCities();
    // this.loadDistricts();
    this.loadPaymentMethods();
    this.initializeFormGroup();
  }
  loadCities(){
    this.service.getAllCities(this.language.getLanguageID()).subscribe(res=>{
      if(!res.isError)
      {
        if(res.result?.data.length>0)
        {
          res.result?.data.forEach(element => {
            let item:pickList={} as pickList;
            item.id=element.id
            item.value=element.name
            this.cities.push(item);
    
          });
        }
      }
      else{
        this.toastr.error(res.result?.message);
      }
    })
  }
  loadDistricts(cityId:any){
    this.service.getAllDistricts(this.language.getLanguageID(),cityId).subscribe(res=>{
      if(!res.isError)
      {
        if(res.result?.data.length>0)
        {
          res.result.data.forEach(element => {
            let item:pickList={} as pickList;
            item.id=element.id
            item.value=element.name
            this.districts.push(item);
    
          });
        }
      }
      else{
        this.toastr.error(res.result?.message);
      }
    })
  }
  loadPaymentMethods(){
    this.service.getAllPaymentMethods(this.language.getLanguageID()).subscribe(res=>{
      if(!res.isError)
      {
        if(res.result?.data.length>0)
        {
          res.result?.data.forEach(element => {
            let item:pickList={} as pickList;
            item.id=element.id
            item.value=element.name
            this.paymentMethods.push(item);
    
          });
        }
      }
      else{
        this.toastr.error(res.result?.message);
      }
    })
  }

  loadProjects(){
    
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
        this.toastr.error(res.result.message);
      }
    })
   
 
  }
  initializeFormGroup() {
    this.myFormGroup.setValue({
      interest_Date:new Date(),
      project_Ref: 0,
      building_Ref:0,
      apartment_Ref:0,
      client_Name: '',//
      client_Mobile: '',//
      client_Mail: '',//
      city:0,//
      district:0,
      payment_Method:0,
      price_Avg:0,//
      space_Avg:0,
      bed_Room:0,
      parking:0,
      terace:0,
      balcony:0,
      roof:0,
      store:0,
      servent_Room:0,

      additional_Reqst:''
    })
  }
  showError:boolean=false;
  onClickSubmit($event){
 if(this.myFormGroup.valid){
  this.service.Post(this.myFormGroup.value).subscribe(res=>{
        if(!res.isError)
        {
          this.toastr.success(":: Successfully Updated")
          this.showError=false
          this.ngOnInit();
        }
        else{
          this.toastr.error(':: Failed Updated');
        }
  })
  } else {
   this.showError=true;
   this.toastr.warning(":: Please Correct your inputs")

  }
  }

  ngOnDestroy(): void {
    // this.editor.destroy();

  }
    onChange(event) {
      if(event.target.value!=""){
        this.myFormGroup.controls['district'].patchValue('');
       this.loadDistricts(event.target.value);
      }
  }


}


export interface pickList{
  id:string;
  value:string;
}
