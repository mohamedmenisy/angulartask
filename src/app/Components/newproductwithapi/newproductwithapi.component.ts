import { ProductsApiService } from './../../Services/products-api.service';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../Interfaces/iproduct';

@Component({
  selector: 'app-newproductwithapi',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './newproductwithapi.component.html',
  styleUrl: './newproductwithapi.component.css'
})
export class NewproductwithapiComponent implements OnInit{
Products!:IProduct[];
constructor(private http:ProductsApiService){}
ngOnInit(): void {
  this.http.getAllProducts().subscribe({
    next:(data)=>{
      this.Products=data;
    }
  })

  
}
}
