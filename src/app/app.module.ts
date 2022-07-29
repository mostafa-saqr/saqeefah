import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { changeLanguageService } from './services/changeLanguage.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopHeaderComponent } from './layout/header/top-header/top-header.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { RecentListComponent } from './pages/home/recent-list/recent-list.component';
import { ParallaxComponent } from './pages/home/parallax/parallax.component';
import { SearchComponent } from './pages/search/search.component';
import { GenaricService } from './services/Genaric.service';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlaceorderComponent } from './pages/placeorder/placeorder.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompareComponent } from './pages/compare/compare.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    AboutSectionComponent,
    RecentListComponent,
    ParallaxComponent,
    SearchComponent,
    ProjectDetailsComponent,
    PropertyDetailsComponent,
    FavoritesComponent,
    AboutUsComponent,
    PlaceorderComponent,
    ContactComponent,
    CompareComponent,
 
  
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

      }
    }),
  ],
  providers: [changeLanguageService, GenaricService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}