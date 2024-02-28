import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/food.service';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  data:Food[] = [];
  constructor(public serviceFood: FoodService){

  }
  ngOnInit(): void {
    this.data = this.serviceFood.getAllFoods();
    console.log(this.data)
  }


}
