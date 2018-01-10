import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { BodyMainComponent } from './Components/body-main/body-main.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    BodyMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
