import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertyComponent } from './property/property.component';
import { SettingComponent } from './setting/setting.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
  path:'',
  component: DashboardComponent,
  children:[
    {
      path:'user',
      component: UsersComponent
    },
    {
      path:'settings',
      component: SettingComponent
    },
    {
      path:'projects',
      component: ProjectsComponent
    },
    {
      path:'Appartments',
      component: PropertyComponent
    },
    {
      path:'edit-project/:id',
      component: EditProjectComponent
    },
    {
      path:'edit-ppartment/:id',
      component: EditPropertyComponent 
    },
    {
      path:'test',
      component: TestComponent 
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
