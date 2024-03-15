import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductServiceService } from './../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductsApiService } from '../../Services/products-api.service';
ActivatedRoute
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  myproduct!:IProduct |undefined;
  isLastIndex:boolean=false;
constructor(public prodS: ProductServiceService ,private _ActivatedRoute:ActivatedRoute , private _router:Router ,private http:ProductsApiService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe(pram=>{
    let pramid=pram.get("id");
    let id =pramid? +pramid :undefined;

    this.http.getAllProductByID(id).subscribe(product=>{
      this.myproduct=product;
    });



    // this.myproduct=this.prodS.getProductByID(id);
    this.isLastIndex = this.prodS.isLastIndex(id);
  })
 
  
}
BackToPage(){
this._router.navigate(["/products"])
}



NextProduct(id:number|undefined){
  const nextId = this.prodS.getNextProduct(id);
    this._router.navigate(['/details', nextId]);
}
PrevProduct(id:number|undefined){
  const PrevId = this.prodS.getPrevProduct(id);
  this._router.navigate(['/details', PrevId]);
}
}
