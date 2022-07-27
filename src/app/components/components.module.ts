import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from '../services/Maker.service';
import { PopupService } from '../services/popup.service';
import { PanoramaComponent } from './panorama/panorama.component';


@NgModule({
  declarations: [
    MapComponent,
    PanoramaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    MapComponent,
    PanoramaComponent
  ],
  providers: [
    MarkerService,
    PopupService
  ]
})
export class ComponentsModule { }
