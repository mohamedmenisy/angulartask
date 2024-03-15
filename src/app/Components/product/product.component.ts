import { IProduct } from './../../Interfaces/iproduct';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CurrencyPipe, DatePipe } from '@angular/common';
import { PipeNamePipe } from '../../Pipes/pipe-name.pipe';
import { ProductServiceService } from '../../Services/product-service.service';
import { CartsirvService } from '../../Services/cartsirv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,PipeNamePipe,DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(public _cartsirv:CartsirvService ,private _router:Router){}
@Input() Product!:IProduct
@Output() handelAddCart= new EventEmitter<IProduct>





currentDate:Date=  new Date();
handelQuantity(event:MouseEvent,product:IProduct){
  event.stopPropagation();
if (product.quantity) {
  product.quantity--;
  product.qWanted++;
}
}
routeToDetails(id:number){

  this._router.navigate(["/details",id])
}


addproductToCart(event:MouseEvent,product:IProduct){
  event.stopPropagation();
if (product.qWanted != 0) {
this._cartsirv.cartArr.push(product);
 
}
}

}
