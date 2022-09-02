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
  public slider: ISlider = {} as ISlider;
  imageList: ISliderAttachment[] = [];

  public myFormGroup: FormGroup = new FormGroup({
    TitleEn: new FormControl('', [Validators.required]),
    TitleAr: new FormControl('', [Validators.required]),
    DescriptionEn: new FormControl(Validators.required),
    DescriptionAr: new FormControl(Validators.required),
    IsActive: new FormControl(),
  });


  public myFormGroupForImages: FormGroup = new FormGroup({

  });



  constructor(private sliderService: SliderService) {
  }

  ngOnInit(): void {

    this.initializeFormGroup();
    this.getAllSliderAttatchments();


  }


  onClickSubmit() {
    if (this.myFormGroup.invalid) {
      this.showError = true;
      return;
    }
    this.slider = {
      titleEn: this.myFormGroup.value.TitleEn,
      titleAr: this.myFormGroup.value.TitleAr,
      descriptionEn: this.myFormGroup.value.DescriptionEn,
      descriptionAr: this.myFormGroup.value.DescriptionAr,
      isActive: this.myFormGroup.value.IsActive,
      id: SliderTypes.OurPartners,
    };
    this.sliderService.UpdateSlider(this.slider).subscribe(r => {
      debugger
      if (!r.isError) {
        alert("success!");
        this.getAllSliderAttatchments(); 
      } else {
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
      IsActive: true,
    })
  }

  onInputChange(event) {
    if (event.target.files) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.images.push(<File>event.target.files[i])
      }
    }
  }
  DeleteImage(attachmentId: number) {
    this.sliderService.deleteSliderAttachment(attachmentId).subscribe(r => {
      if (!r.isError) {
        alert("success")
        this.getAllSliderAttatchments();
      }
    });
  }

  getAllSliderAttatchments() {
    this.sliderService.getAllSliderByid(SliderTypes.OurPartners).subscribe(res => {
      if (!res.isError) {
        this.slider = res.result.data;
      }
    })
  }



  uploadImages(e) {
    e.preventDefault();
    debugger; 
    if (this.images.length > 0) {
      let sliderTypeId= SliderTypes.OurPartners; 
      this.formData.append('SliderId ',sliderTypeId.toString())
      for (var  index = 0; index < this.images.length; index++) {
        this.formData.append('Images', this.images[index], this.images[index].name);
      }
      this.sliderService.uploadAttachmentImagesSlider(this.formData).subscribe(r => {
         if(!r.isError)
         {
           alert("success"); 
         }
      });


    }

  }


}
