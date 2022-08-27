import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {ComponentsModule, HttpLoaderFactory} from '../../components/components.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertyComponent } from './property/property.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './navigator/footer/footer.component';
import { HeaderComponent } from './navigator/header/header.component';
import { SidebarComponent } from './navigator/sidebar/sidebar.component';
import { SocialmediaComponent } from './setting/pages/socialmedia/socialmedia.component';
import { TopHeaderComponent } from './navigator/top-header/top-header.component';
import { SettingFormComponent } from './setting/components/setting-form/setting-form.component';
import { IconPickerModule } from 'ngx-icon-picker';
import { SettingComponent } from './setting/pages/setting.component';
import { PartnerComponent } from './setting/pages/partner/partner.component';



@NgModule({
  declarations: [
    DashboardComponent,
            SettingComponent,
            SettingFormComponent,
            UsersComponent,
            ProjectsComponent,
            PropertyComponent,
            EditProjectComponent,
            EditPropertyComponent,
            TestComponent,
            HeaderComponent,
            SidebarComponent,
            FooterComponent,
            TopHeaderComponent,
            SocialmediaComponent,
            PartnerComponent,
           
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IconPickerModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

      }
    }),
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
