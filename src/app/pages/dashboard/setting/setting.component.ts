import { Component, OnInit } from '@angular/core';
import { SettingTypes } from 'src/app/shared/Enums/enums';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {



  constructor(){
    
  }
  ngOnInit(): void {
  //
  }
  
  get settingTypes() {
    const keys=Object.values(SettingTypes);
    return keys; 
  }



  
}
