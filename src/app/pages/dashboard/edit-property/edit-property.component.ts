import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { environment } from 'src/environments/environment';
import { AttachmentService } from '../services/attachment.service';
@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {
  propertyId: any
  uploadWorking = false
  projectId: any
  propertyImageThumb: File = null
  propertyImageGallery: File[] = []
  formData: FormData = new FormData()
  onInputChange(event) {


    if (event.target.files) {
      this.propertyImageThumb = <File>event.target.files[0]
      console.log('file data', this.propertyImageThumb)
    }
  }
  onGalleryInputChange(event) {
    this.propertyImageGallery=[];
    if (event.target.files) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.propertyImageGallery.push(<File>event.target.files[i])
      }
    }
  }

  uploadImage(e) {
    this.uploadWorking = true
    e.preventDefault();
    this.formData=new FormData();
    this.formData.append('CoverImage', this.propertyImageThumb, this.propertyImageThumb.name)

    this.formData.append('Apartment_Id', this.propertyId)
    this.formData.append('Project_Id', this.projectId)


    for (var i = 0; i < this.propertyImageGallery.length; i++) {
      this.formData.append("Images", this.propertyImageGallery[i], this.propertyImageGallery[i].name);
    }



    this.editproperty.uploadpropertyImage(this.formData).subscribe((resp) => {
      if (!resp.isError) {
        this.toastr.success("Successfully Updated")
        this.ngOnInit();
        this.uploadWorking = false;
        this.propertyImageGallery=[];
      }
      else {
        this.toastr.error("Failed Updated")
      }

    })
  }
  constructor(private attachmentService: AttachmentService, private editproperty: ProjectAndListService, private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private toastr: ToastrService) { }
  coverImage: any;
  gallaryImages: any[];
  appRootUrl = environment.appRoot + '/';
  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.editproperty.getAppartmentDetails(this.propertyId).subscribe(res => {
      if (!res.isError) {
        console.log(res)
        this.coverImage = res.result['data']['coverImage'];
        this.gallaryImages = res.result['data']['images'];
      }
    })
  }
  delete(id: any) {
    this.attachmentService.deleteAttachment(id, "Apartment").subscribe(res => {
      if (!res.isError) {
        this.toastr.success("Successfully Deleted")
        this.ngOnInit();
      }
      else {
        this.toastr.error("Failed Deleted")
      }

    })
  }
  deleteCover() {
    this.attachmentService.deleteApartmentCover(this.propertyId).subscribe(res => {
      if (!res.isError) {
        this.toastr.success("Successfully Deleted")
        this.ngOnInit();
      }
      else {
        this.toastr.error("Failed Deleted")
      }

    })
  }

}
