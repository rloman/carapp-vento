import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CarsComponent } from './components/cars/cars.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarItemComponent } from './components/car-item/car-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarAddComponent,
    CarDetailComponent,
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
