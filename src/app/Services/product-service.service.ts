import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import MyProducts from '../../assets/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:IProduct[]=[];
  cartArray:IProduct[]=[];
  constructor() { 
      this.products=MyProducts;
  }
  getProductsByCatName(CatName:string):IProduct[]
  {

  return MyProducts.filter(p=>p.catg.toLowerCase()==CatName.toLowerCase());
  }
  
  getProductByID(id:number |undefined):IProduct |undefined
  {
    return this.products.find(p=>p.id == id) ;
  }
 
  getNextProduct(id:number|undefined):number{
    let index = this.products.findIndex((product) => product.id == id);

    const findedProduct = this.products[++index];

    return findedProduct.id;

  }
  getPrevProduct(id:number|undefined):number{
    let index = this.products.findIndex((product) => product.id == id);

    const findedProduct = this.products[--index];

    return findedProduct.id;
  }
  isLastIndex(id: number | undefined) {
   

    const findedProduct = this.products[this.products.length - 1];
    return findedProduct.id == id;
  }

}
