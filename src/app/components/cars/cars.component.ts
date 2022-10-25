import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Observable, Subscription} from "rxjs";
import {Car} from "../../model/car";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;
  public cars$?: Observable<Car[]>;

  constructor(private carService: CarService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.cars$ = this.carService.findAll();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onCreateNewCarEventEmitted(car: Car) {
    this.subscription?.unsubscribe();
    this.subscription = this.carService.create(car).subscribe(car => {
      // this.showError(new Error("404")); // to test an error
      this.showSuccess(car);
      this.ngOnInit();
    }, error => {
      this.showError(error);
    })
  }


  /*
  this.toastr.success :: = green
  this.toastr.error ::= red
  this.toastr.show ::= black
  (based on the styling in toastr.css)
   */

  showSuccess(car: Car) {
    this.toastr.success(`Car with licensePlate "${car.licensePlate}" added`, 'Success');
  }

  showError(error: Error) {
    this.toastr.error(`An error occurred: ${error.message}`, 'Failed');
  }
}
