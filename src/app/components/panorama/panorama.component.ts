import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
declare var pannellum:any
@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.scss']
})
export class PanoramaComponent implements OnInit {
  panorama:any
  viewer:HTMLElement | undefined
  constructor(@Inject(DOCUMENT) private document: Document) { 
    
  }

  ngOnInit(): void {
    pannellum.viewer('panoramaContainer', {
      "type": "equirectangular",
      "panorama": "https://enterprise.press/wp-content/uploads/2021/12/cold-vintage-1600pz-1140x574.jpg"
  });
  }
runPanroama(){

 
}
}
