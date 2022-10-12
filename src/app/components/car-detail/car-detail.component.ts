import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../services/car.service";
import {Observable} from "rxjs";
import {Car} from "../../model/car";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carForm: FormGroup = this.fb.group(
    {
      id: [],
      licensePlate: [], //<= licensePlate is default blank and is required!
      brand: [Validators.required],
      mileage: [Validators.required]
    }
  );

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private carService: CarService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.carService.findById(id).subscribe(car => {
        this.carForm.setValue(car);
      }
    )
  }

  onSubmit(): void {
    this.carService.update(this.carForm.value).subscribe(car => {
      // toatsrservice?
      console.log("updated");
      console.table(car);
    });
    this.router.navigate(["cars"]);
  }
}
