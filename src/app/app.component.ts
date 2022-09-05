import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from './pages/dashboard/services/busy.service';
import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'saqeefah';
constructor(private preloader: PreloaderService , private loader : BusyService){
this.loader.busy();
}
ngOnInit(): void {


}

  ngAfterViewInit() {
    this.loader.idle();
  }



}
