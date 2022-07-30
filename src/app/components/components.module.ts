import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    MapComponent,
    PanoramaComponent,
    ProjectCardComponent,
    PropertyCardComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
    MapComponent,
    PanoramaComponent,
    ProjectCardComponent,
    PropertyCardComponent,
    SearchFormComponent
  ],
  providers: [
    MarkerService,
    PopupService
   
  ]
})
export class ComponentsModule { }
