import { NgModule } from '@angular/core';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from '../services/Maker.service';
import { PopupService } from '../services/popup.service';
import { PanoramaComponent } from './panorama/panorama.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    MapComponent,
    PanoramaComponent,
    ProjectCardComponent,
    PropertyCardComponent,
    SearchFormComponent,
    ModalComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    GalleryModule
  ],
  exports:[
    MapComponent,
    PanoramaComponent,
    ProjectCardComponent,
    PropertyCardComponent,
    SearchFormComponent,
    ModalComponent,
    GalleryComponent
  ],
  providers: [
    MarkerService,
    PopupService
   
  ]
})
export class ComponentsModule { }
