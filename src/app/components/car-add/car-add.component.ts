import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  public newCarEventEmitter: EventEmitter<Car> = new EventEmitter<Car>();


  carForm: FormGroup = this.fb.group(
    {
      licensePlate: ['', Validators.required], //<= licensePlate is default blank and is required!
      brand: ['', Validators.required],
      mileage:[42]
    }
  );
  constructor(
    private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newCarEventEmitter.emit(this.carForm.value)
  }
}
