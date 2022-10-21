import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() car?: Car;
  constructor() {}

  ngOnInit(): void {}
}
