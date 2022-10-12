import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input()
  public car?: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
