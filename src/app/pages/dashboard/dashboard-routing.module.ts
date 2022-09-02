import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsListComponent } from './clientInterest/contact-us-list/contact-us-list.component';
import { FeedbackListComponent } from './clientInterest/feedback-list/feedback-list.component';

import { DashboardComponent } from './dashboard.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertyComponent } from './property/property.component';
import { PartnerComponent } from './setting/pages/partner/partner.component';
import { SettingComponent } from './setting/pages/setting.component';
import { SocialmediaComponent } from './setting/pages/socialmedia/socialmedia.component';
import { WebsiteInfoComponent } from './setting/pages/website-info/website-info.component';
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
      path:'edit-property/:projectId/:propertyId',
      component: EditPropertyComponent
    },
    {
      path:'test',
      component: TestComponent
    },
    {
      path:'social',
      component: SocialmediaComponent
    },
    {path:'partner',
    component:PartnerComponent

    },
    {path:'websiteInfo',
    component:WebsiteInfoComponent,

    },
    {
      path:'contactlist',
      component:ContactUsListComponent
    },
    {
      path:'feedbacklist',
      component:FeedbackListComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
