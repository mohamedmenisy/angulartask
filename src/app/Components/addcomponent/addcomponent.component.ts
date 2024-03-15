import { IProduct } from './../../Interfaces/iproduct';
import { ProductsApiService } from './../../Services/products-api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcomponent',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './addcomponent.component.html',
  styleUrl: './addcomponent.component.css'
})
export class AddcomponentComponent {
  myproduct!:FormGroup
constructor(private formbilder:FormBuilder,private apiserv:ProductsApiService){}

product:IProduct={
  id:0,
  name:"",
  imgUrl:"",
  quantity:0,
  price:0,
  discount:true,
  catg:"",
  qWanted:0,
 }

 
  onsubmit(addform:any){

    this.apiserv.addProduct(addform.value).subscribe(data=>{
      alert("product added")
    })

  }
}
