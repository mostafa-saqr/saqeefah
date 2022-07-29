import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


declare var PANOLENS:any
@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.scss']
})
export class PanoramaComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    const panorama = new PANOLENS.ImagePanorama('../../../assets/images/panorama1.jpg');
    const ele = this.document.querySelector('#container')
    const viewer = new PANOLENS.Viewer({
        container: ele,
        autoRotate:true,
        autoRotateSpeed:0.1,
        controlBar:false
    });
    viewer.add(panorama);
    viewer.OrbitControls.noZoom = true;
  }

}
