import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {
    path: "cars",
    component: CarsComponent
  },
  {
    path: 'cars/:id',
    component: CarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
