import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartsirvService } from '../../Services/cartsirv.service';
import { IProduct } from '../../Interfaces/iproduct';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MyserviceService } from '../../Services/myservice.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit ,OnDestroy{

  cartitems:IProduct[]=[];
constructor(public _cartSer:CartsirvService , private _myser:MyserviceService){
  this.cartitems=_cartSer.cartArr;
}
currentDate:Date = new Date()
deleteFromCart(product:IProduct){
  this._cartSer.removeFromCart(product)
 }

ngOnInit(): void {
  this._myser.dataObservable$.subscribe(data=>{
    console.log("data" ,data);
    
  })
}

ngOnDestroy(): void {
  this._myser.ngOnDestroy();
}



}
