import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { pickList } from 'src/app/pages/placeorder/placeorder.component';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { PlaceOrderService } from 'src/app/services/placeOrder.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-about-section-facility',
  templateUrl: './about-section-facility.component.html',
  styleUrls: ['./about-section-facility.component.scss']
})
export class AboutSectionFacilityComponent implements OnInit {
  constructor() {
  }
 
  ngOnInit(): void {

  }

}
