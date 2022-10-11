import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../../model/car";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  car$?: Observable<Car>;
  carForm: FormGroup = this.fb.group(
    {
      licensePlate: ['', Validators.required], //<= licensePlate is default blank and is required!
      brand: ['', Validators.required],
      mileage:[42]
    }
  );
  constructor(
    private fb: FormBuilder,  // <=
    private carService: CarService) {
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.car$ = this.carService.create(this.carForm.value);
    this.carForm.reset();
  }
}
