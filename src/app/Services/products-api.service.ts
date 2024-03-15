import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import { Observable } from 'rxjs';
import { Iadd } from '../Interfaces/iadd';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http:HttpClient) { }
 

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json',
    
    
    
  })

  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>("http://localhost:3000/products");
  }
  getAllProductByID(id:number|undefined):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);

  }
  getProductsByCatName(CatName:string):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3000/products?catg=${CatName}`);

  }
  updateProduct(product: IProduct): Observable<IProduct> {
    
    return this.http.put<IProduct>(`${environment.baseurl}/products/${product.id}`, product);
  }
  deleteProduct(id: number): Observable<void> {
    const url = `${environment.baseurl}/products/${id}`;
    return this.http.delete<void>(url, { headers: this.httpHeaders });
  }


  addProduct(product: IProduct) {
    return this.http.post<IProduct>("http://localhost:3000/products",product,
      {
        headers: this.httpHeaders,
      }
    );
  }



}
