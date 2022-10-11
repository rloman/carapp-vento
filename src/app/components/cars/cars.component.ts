import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Observable, Subscription} from "rxjs";
import {Car} from "../../model/car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;
  public cars$?: Observable<Car[]>;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.cars$ = this.carService.findAll();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
