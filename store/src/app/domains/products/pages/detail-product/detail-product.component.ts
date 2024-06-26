import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { MProduct } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {


  private serviceDetailProduct = inject(ProductService);
  private cartService = inject(CartService);
  @Input() id ?: String;
  productDetail !: MProduct;
  cover = signal<string>("");

  ngOnInit(): void {
    if(this.id){
      this.serviceDetailProduct.getOneProduct(this.id).subscribe({
        next: (productSubscribe)=>{
          console.log(productSubscribe);
          this.productDetail = productSubscribe;
          this.cover.set(productSubscribe.images[0]);
        }

      });
    }
  }

  changeCover(img : string){
    if(img){
      this.cover.set(img);
    }
  }

  addToCart(product : MProduct){
    console.log(product);
    this.cartService.addElementOfCart(product);
  }






}
