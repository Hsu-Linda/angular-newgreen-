import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HomePagePicturesComponent } from './components/home-page-pictures/home-page-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePagePicturesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
