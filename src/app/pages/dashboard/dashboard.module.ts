import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertyComponent } from './property/property.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    
  
    DashboardComponent,
            SettingComponent,
            UsersComponent,
            ProjectsComponent,
            PropertyComponent,
            EditProjectComponent,
            EditPropertyComponent,
            TestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
