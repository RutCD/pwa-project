import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu:Food[]=[
    {
      id: 1,
      name: "Mole",
      description: "Mole de puebla",
      category: 'food',
      image: 'https://www.informador.mx/__export/1506078881794/sites/elinformador/img/historico/3/1183244.jpg_1970638775.jpg',
      price: 70
    },
    {
      id: 2,
      name: "Mole",
      description: "Mole de puebla",
      category: 'food',
      image: 'https://www.informador.mx/__export/1506078881794/sites/elinformador/img/historico/3/1183244.jpg_1970638775.jpg',
      price: 70
    },
    {
      id: 3,
      name: "Mole",
      description: "Mole de puebla",
      category: 'food',
      image: 'https://www.informador.mx/__export/1506078881794/sites/elinformador/img/historico/3/1183244.jpg_1970638775.jpg',
      price: 70
    },
    
  ]
  constructor() { }

  public getAllFoods():Food[]{
    return this.menu;
  }
}
