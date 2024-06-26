import { CartService } from './../../../shared/services/cart.service';
import { MProduct } from './../../../shared/models/product.model';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ProductService } from '../../../shared/services/product.service';
import { MCategory } from '../../../shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<MProduct[]> ([]);
  categories = signal<MCategory[]>([]);
  @Input() category_id ?: string;
  productsElegidos = signal<MProduct[]> ([]);
  private productService  = inject(ProductService);
  private cartService  = inject(CartService);


  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    this.getListProducts();
  }


  ngOnInit(): void {
    this.getListProducts();
    this.getListCategories();
  }

  private getListProducts(){
    return this.productService.getProducts(this.category_id).
              subscribe({
                next : (products) =>{
                  console.log(products);
                  this.products.set(products);
                },
                error : (err) => {
                  console.log(err);
                }
              })
  }

  private getListCategories(){
    return this.productService.getCategories().
              subscribe({
                next : (categorie) =>{
                  this.categories.set(categorie);
                },
                error : (err) => {
                  console.log(err);
                }
              })
  }



  addToCart(product : MProduct){
    this.cartService.addElementOfCart(product);
  }



}
