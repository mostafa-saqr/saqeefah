import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import jsonDoc from '../../models/doc'

@Component({
  selector: 'app-website-info',
  templateUrl: './website-info.component.html',
  styleUrls: ['./website-info.component.scss']
})
export class WebsiteInfoComponent implements OnInit,OnDestroy  {

  editordoc =jsonDoc;
  html="";
  editor: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  public myFormGroup: FormGroup = new FormGroup({
    websiteInfo: new FormControl('', [Validators.required]),

  });

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.initializeFormGroup();

  }


  onClickSubmit($event){
 if(this.myFormGroup.valid){



    this.toastr.success(":: Successfully Updated")

  } else {

    this.toastr.error(':: Failed Updated');}




  }
  initializeFormGroup() {
    this.myFormGroup.setValue({
      websiteInfo: '',

    })
  }
  ngOnDestroy(): void {
    this.editor.destroy();

  }


}
