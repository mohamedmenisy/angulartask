import { Component } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductsApiService } from '../../Services/products-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deleteproduct.component.html',
  styleUrl: './deleteproduct.component.css'
})
export class DeleteproductComponent {
  product: IProduct | undefined;
  productId: number | undefined;
  constructor(private httpproduct:ProductsApiService){}

onDelet() {
    if (this.productId) {
      this.httpproduct.deleteProduct(this.productId).subscribe(
        () => {
          confirm(`sure to delet ?`)
          alert('Product deleted successfully');
        }
       
      );
    } 
  }
}
