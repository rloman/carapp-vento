import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import {MyCanActivateGuardGuard} from "./authentication/my-can-activate-guard.guard";

const routes: Routes = [
  {
    path: "cars",
    component: CarsComponent
  },
  {
    path: 'cars/:id',
    canActivate: [MyCanActivateGuardGuard],
    component: CarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
