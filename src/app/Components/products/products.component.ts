import { ProductServiceService } from './../../Services/product-service.service';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import MyProducts from '../../../assets/productList';
import { DatePipe, NgClass } from '@angular/common';
import { HighlightDirective } from '../../Directive/highlight.directive';
import { ProductComponent } from '../product/product.component';
import {  FormsModule, NgModel } from '@angular/forms';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-format.pipe';
import { RouterLink } from '@angular/router';
import { ProductsApiService } from '../../Services/products-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass,HighlightDirective,ProductComponent ,FormsModule ,CreditCardFormatPipe,DatePipe ,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements   OnInit ,OnDestroy ,DoCheck , AfterContentInit, AfterContentChecked ,AfterViewInit ,AfterViewChecked{

  constructor(public _productService:ProductServiceService,private http:ProductsApiService){
    console.log("first run");

  }
  ClientName:string= "Mohamed Menisy"
  logoimg:string="../../../assets/logo.jpg"
  products:IProduct[]=MyProducts;
 
  // shoImg:boolean=true;
  // toggleImg(){
  //   this.shoImg = !this.shoImg
  // };

  // buyNow(myproduct:IProduct){
  //   if (myproduct.quantity) {
  //     myproduct.quantity--;
  //   }
  // }
  IsPurshased:boolean=true;
  // buyNow(myproduct:IProduct){
  //   this.IsPurshased = !this.IsPurshased
  //   if (myproduct.quantity) {
  //     myproduct.quantity--;
  //   }
  //   setTimeout(() => {
  //     this.IsPurshased = !this.IsPurshased
  //   }, 2500);
  // }


  //search
  searchText:string=""
  selectVal:string=""
  creditCard:string=""
  searchArr(){
    if (this.searchText == "") {
      this.products=MyProducts;
     
     }else{
      this.products=this.products.filter(p=>p.name.toLowerCase().includes(this.searchText.toLowerCase()));
  
      
     }
  }
  searchBySelectedValue(){
    if (this.selectVal == "All") {
      this.products=MyProducts;
     
     }else{
      // this.products=this._productService.getProductsByCatName(this.selectVal);
  
      this.http.getProductsByCatName(this.selectVal).subscribe(products=>{
        this.products=products;
      })
     }
  }
  currentDate:Date=new Date()

  totalPrice:number=0
    
  


  
ngOnChanges(): void {
console.log("onchanges");

  
}


  

ngOnInit(): void {
 console.log("oninit");
 //run 3
  
}
ngDoCheck(): void {
  console.log("docheck");
  
    
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
    
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log("afterviewinit");
    
  }

  ngAfterViewChecked(): void {
    console.log("afterviewcheked");
    
  }
  
  
  
ngOnDestroy(): void {
console.log("last run");

}



}
 