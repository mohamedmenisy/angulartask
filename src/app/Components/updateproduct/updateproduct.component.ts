import { ProductsApiService } from './../../Services/products-api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../Interfaces/iproduct';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {
  constructor(private apiser:ProductsApiService){}
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
  onsubmit(updateform:any){
    this.apiser.updateProduct(updateform.value).subscribe(data=>{
      alert("update done")
      
        
      })
  }
}
