import { Component, OnInit } from '@angular/core';
import {  Image } from '@ks89/angular-modal-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [
    new Image(
      0,
      {
        img:'assets/images/gallery/bg1.jpg'
      },
      {
        img:'assets/images/gallery/bg1.jpg'
      }
    ),
    new Image(
      1,
      {
        img:'assets/images/gallery/bg2.jpg'
      },{
        img:'assets/images/gallery/bg2.jpg'
      }
    ),
    new Image(
      2,
      {
        img:'assets/images/gallery/bg3.jpg'
      },{
        img:'assets/images/gallery/bg3.jpg'
      }
    ),

  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
