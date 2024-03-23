import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FoodService } from '../../foods/shared/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../foods/shared/food.model';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButton, MatError],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(2)]],
  });

  constructor(private formBuilder: FormBuilder,  public serviceFood:FoodService, public router:Router) {}
  foodId:number = -1;
  edit:boolean = false;
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  food?:Food = {
    name: '',
    description: '',
    image: '',
    category: '',
    price: 0
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params['id']){
      this.edit = true;
      this.foodId = Number(this.activeRoute.snapshot.params['id']);
      this.food = this.serviceFood.getOne(this.foodId)
      if (this.food) {
        this.form.patchValue({
          name: this.food.name,
          description: this.food.description,
          image: this.food.image,
          category: this.food.category,
          price: this.food.price.toString()
        })
      }
    }
    
  }

  public sendData(){
    if(this.form.status == 'VALID'){
      if(
        this.name?.value &&
        this.description?.value &&
        this.image?.value &&
        this.category?.value &&
        this.price?.value 
      ) {
        let priceNumber = Number(this.price.value);
          let comida: Food = {
            name: this.name?.value,
            description: this.description?.value,
            image: this.image?.value,
            category: this.category?.value,
            price: priceNumber
          };

          this.serviceFood.addFood(comida);
          this.router.navigate(['/food/food-list'])
      }
    }
  }

  public updateData(){
    if(this.form.status == 'VALID'){
      if(
        this.name?.value &&
        this.description?.value &&
        this.image?.value &&
        this.category?.value &&
        this.price?.value 
      ) {
        let priceNumber = Number(this.price.value);
          let comida: Food = {
            id: this.foodId,
            name: this.name?.value,
            description: this.description?.value,
            image: this.image?.value,
            category: this.category?.value,
            price: priceNumber
          };
          this.serviceFood.updateFood(comida);
          this.router.navigate(['/food/food-list'])
      }
    }
  }

  get name() {
    return this.form.get('name');
  }

  get description(){
    return this.form.get('description')
  }

  get image(){
    return this.form.get('image')
  }

  get category(){
    return this.form.get('category')
  }

  get price(){
    return this.form.get('price')
  }

  // name = new FormControl([Validators.maxLength(20), Validators.required]);

  // public showValue(){
  //   if (this.name.hasError('required')){
  //     return 'You must enter a value';
  //   } else if(this.name.hasError('maxLength')){
  //     return 'Minimo 20 caracteres'
  //   }
  //   return 'Error';
  // }

  // public changeValue():void{
  //   // this.name.setValue('Mole!!')
  // } 
}
