import { Component, OnInit } from '@angular/core';
import { Setting } from '../dashboard/Model/setting';
import { SettingsService } from '../dashboard/services/settings.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  public items: Setting[];

  constructor(private setting :SettingsService) { }

  ngOnInit(): void {
    this.setting.getAllsettings().subscribe(res=>{
      if(!res.isError){
        this.items=res.result.data;
        console.log(this.items); 
      }
    }); 
  }

  

}
