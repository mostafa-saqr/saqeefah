import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { SliderTypes } from 'src/app/shared/Enums/enums';
import { environment } from 'src/environments/environment';
import jsonDoc from '../../models/doc';
import { ISlider, ISliderAttachment } from '../../models/slider.interface';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  showError = false;
  images: Array<File> = [];
  formData: FormData = new FormData();
  spaceregex = /^(\s+\S+\s*)*(?!\s).*$/;
  editordoc = jsonDoc;
  appRootUrl = environment.appRoot + '/';
  slider: ISlider = {} as ISlider;
  imageList:ISliderAttachment[] = [] ;

  public myFormGroup: FormGroup = new FormGroup({
    TitleEn: new FormControl('', [Validators.required]),
    TitleAr: new FormControl('', [Validators.required]),
    DescriptionEn: new FormControl(Validators.required),
    DescriptionAr: new FormControl(Validators.required),
    IsActive:new FormControl(),
  });


  public myFormGroupForImages: FormGroup = new FormGroup({

  });



  constructor(private sliderService: SliderService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
    this.getAllsliderAttatchment();

  }


  onClickSubmit() {
    if (this.myFormGroup.invalid) {
      this.showError = true;
      return;
    }
    this.slider = {
      TitleEn: this.myFormGroup.value.TitleEn,
      TitleAr: this.myFormGroup.value.TitleAr,
      DescriptionEn: this.myFormGroup.value.DescriptionEn,
      DescriptionAr: this.myFormGroup.value.DescriptionAr,
      IsActive:this.myFormGroup.value.IsActive,
      Id: SliderTypes.OurPartners,
    };
    this.sliderService.UpdateSlider(this.slider).subscribe(r => {
      debugger
      if (!r.isError) {
        alert("success!");
      }else{
        alert("faill");
      }
    })

  }


  initializeFormGroup() {
    this.myFormGroup.setValue({
      TitleEn: '',
      TitleAr: '',
      DescriptionEn: '',
      DescriptionAr: '',
      IsActive:true,


    })
  }



  onInputChange(event) {
    if(event.target.files){
      for  (var i =  0; i <  event.target.files.length; i++)  {
        this.images.push(<File>event.target.files[i])
      }
    }
  }



  DeleteImage() {

  }

  getAttachmentSlider(){

    this.sliderService.getAllSliders(SliderTypes.OurPartners).subscribe(r=>{




    });
  }
 getAllsliderAttatchment()
 {

  this.sliderService.getAllSliderByid(SliderTypes.OurPartners).subscribe(res =>{
    if(!res.isError)
    {

     // this.imageList= res.result.data;
      alert('sucess')

    }
    else{

      alert('failed');


    }
  })
 }



}
