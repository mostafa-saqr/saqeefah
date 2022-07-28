import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService  {
  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
    
      `<div class="card project-card" style="width:300px">
      <div class="img-panel">
          <img src="https://www.dvele.com/sites/default/files/styles/hero_image/public/2019-10/Home-Image-1600x600.jpg?itok=gvYYp31c" class="card-img-top" alt="...">
          <i class="icon tagr-icon-heart fav-icon"></i>
          <div class="card-label">For Rent</div>
          <div class="card-mask"></div>
      </div>
      <div class="card-body">
          <div class="unit-location">
              <div class="row">
                  <div class="col-md-12">
                      <h5>Unit Name</h5>
                      <h6>Country</h6>
  
                  </div>
                  
              </div>
          
              
          </div>
          <div _ngcontent-bgr-c19="" class="unit-specs"><div _ngcontent-bgr-c19="" class="row"><div _ngcontent-bgr-c19="" class="col-md-6 mb-2"><span _ngcontent-bgr-c19="" class="specs-ele"><i _ngcontent-bgr-c19="" class="icon tagr-icon-building-line"></i><!--bindings={
            "ng-reflect-ng-if": "true"
          }--><!--bindings={
            "ng-reflect-ng-if": "false"
          }--><span _ngcontent-bgr-c19="" class="specs-count"><span _ngcontent-bgr-c19="" class="counter me-1">3</span>Buildings</span></span></div><div _ngcontent-bgr-c19="" class="col-md-6 mb-2"><span _ngcontent-bgr-c19="" class="specs-ele"><i _ngcontent-bgr-c19="" class="icon tagr-icon-home"></i><!--bindings={
            "ng-reflect-ng-if": "true"
          }--><!--bindings={
            "ng-reflect-ng-if": "false"
          }--><span _ngcontent-bgr-c19="" class="specs-count"><span _ngcontent-bgr-c19="" class="counter me-1">60</span>Apprtments</span></span></div><!--bindings={
            "ng-reflect-ng-for-of": "1,1"
          }--></div></div>
      </div>
  </div>`
  }
}