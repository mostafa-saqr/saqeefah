import { Component, OnInit } from '@angular/core';
import { ISettingType } from '../models/settingType.interface';
import { SettingsService } from '../services/settings.service';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {


  public stingTypes:Array<ISettingType>; 

  constructor(private settingsService: SettingsService) {

  }
  ngOnInit(): void {
    this.getSettingTypes(); 
  }

  public getSettingTypes() {

    this.settingsService.getAllsettingsType().subscribe(r => {
      debugger; 
     
      if(!r.isError){
       this.stingTypes= r.result["data"];
       console.log( this.stingTypes);
      }

    });


  }




}
