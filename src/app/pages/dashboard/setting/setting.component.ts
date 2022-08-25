import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Setting } from '../Model/setting';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  
items = [
  {num:1,
   title:'About Us'
  },
  { num:2,
    title:'CEO Word'
   },
   {num:3,
    title:'Our Vision'
   },
   {num:4,
    title:'Our Mission'
   },
   {num:5,
    title:'Our Goals'
   },
   {num:6,
    title:'Our Designs'
   },
   {num:7,
    title:'About Our Meetings'
   },
   {num:8,
    title:'Fashionable Designs'
   }
]; 
  constructor(){
    
  }
  ngOnInit(): void {
  //
  }
  


  
}
