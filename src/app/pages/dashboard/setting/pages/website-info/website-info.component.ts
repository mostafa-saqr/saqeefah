import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { siteInfo } from 'src/app/pages/Models/siteInfo';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { siteInformationService } from 'src/app/shared/services/siteInformation.service';
import jsonDoc from '../../models/doc'

@Component({
  selector: 'app-website-info',
  templateUrl: './website-info.component.html',
  styleUrls: ['./website-info.component.scss']
})
export class WebsiteInfoComponent implements OnInit,OnDestroy  {

  // editordoc =jsonDoc;
  // html="";
  // editor: Editor;
  siteInformations:siteInfo;
  items:picklist[]=[] as picklist[];
  // toolbar: Toolbar = [
  //   ['bold', 'italic'],
  //   ['underline', 'strike'],
  //   ['code', 'blockquote'],
  //   ['ordered_list', 'bullet_list'],
  //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  //   ['link', 'image'],
  //   ['text_color', 'background_color'],
  //   ['align_left', 'align_center', 'align_right', 'align_justify'],
  // ];
  public myFormGroup: FormGroup = new FormGroup({
    key: new FormControl('', [Validators.required]),
    valueAr: new FormControl('', [Validators.required]),
    valueEn: new FormControl('', [Validators.required]),
  });

  constructor(private toastr: ToastrService,private siteInformation:siteInformationService,
    private language:changeLanguageService) { }

  ngOnInit(): void {
    // this.editor = new Editor();
    this.siteInformation.getAllInformation(this.language.getLanguageID()).subscribe(x=>{
      if(!x.isError)
      {
        if(x.result['succeeded'])
        {
          this.siteInformations=x.result['data'];
          Object.keys(this.siteInformations).forEach(k=>{
            this.items.push({id:k,value:k});
          });
          this.initializeFormGroup();
        }
        else{
        }
      }

    })
  }
  initializeFormGroup() {
    this.myFormGroup.setValue({
      key: '',
      valueAr: '',
      valueEn: '',
    })
  }

  onClickSubmit($event){
 if(this.myFormGroup.valid){
  let model = {
    key: this.myFormGroup.value.key,
    valueAr: this.myFormGroup.value.valueAr,
    valueEn: this.myFormGroup.value.valueEn,

  };
  this.siteInformation.postInformation(model).subscribe(res=>{
        if(!res.isError)
        {
          this.toastr.success(" Successfully Updated")
          this.ngOnInit();
        }
        else{
          this.toastr.error(' Failed Updated');
        }
  })
  } else {

  }
  }

  ngOnDestroy(): void {
    // this.editor.destroy();

  }
  onChange(event) {
    if(event.target.value!=""){
      this.myFormGroup.patchValue({valueAr:this.siteInformations[event.target.value],valueEn:this.siteInformations[event.target.value]})
    ;
    }
}


}


export interface picklist{
  id:string;
  value:string;
}
