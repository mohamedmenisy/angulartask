import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartsirvService {
cartArr:IProduct[]=[]
  constructor() { }

  addTocart(product:IProduct){
    this.cartArr.push(product);
  }
  removeFromCart(product:IProduct){
    this.cartArr.splice(this.cartArr.indexOf(product),1);
    product.quantity+=product.qWanted;
    product.qWanted=0;
  }
}
