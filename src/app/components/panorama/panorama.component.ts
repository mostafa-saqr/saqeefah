import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { environment } from 'src/environments/environment';


declare var PANOLENS:any
@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.scss']
})
export class PanoramaComponent implements OnInit, AfterViewInit {
  
@Input() setting:any;
@Input() panoramaImg:any;
selectedSetting:any
constructor(@Inject(DOCUMENT) private document: Document) { }

appRootUrl=environment.appRoot+'/'; 
  ngOnInit(): void {
   
 
 
  }
ngAfterViewInit():void{
  var panorama = new PANOLENS.ImagePanorama(this.appRootUrl+this.panoramaImg);
  const ele = this.document.querySelector('#container')
  const viewer = new PANOLENS.Viewer({
      container: ele,
      autoRotate:true,
      autoRotateSpeed:0.1,
      controlBar:false
  });
  viewer.add(panorama);
  viewer.OrbitControls.noZoom = true;
  console.log('panorama setting',this.setting)

}
}
