import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CompareComponent } from './pages/compare/compare.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaceorderComponent } from './pages/placeorder/placeorder.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { SearchComponent } from './pages/search/search.component';
import { UserlayoutComponent } from './pages/userSite/userlayout/userlayout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'place-order',
    component: PlaceorderComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'building/:id',
    component: ProjectDetailsComponent,
  },
  {
    path: 'property/:buildingId/:PropertyId',
    component: PropertyDetailsComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'compare',
    component: CompareComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
  
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
