import { Route, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food-list/food-list.component';


export default[
    {
        path: 'food-list', component: FoodListComponent
    },    
] satisfies Route[];
