import { CartService } from './../services/cart.service';
import { MProduct } from './../models/product.model';
import { Component, Input, Output, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.totalCart;

  toogleSide(){
    this.hideSideMenu.update( prevState => !prevState);
  }

  removeItem(product : MProduct){
    this.cartService.deleteElementoOfCart(product);
  }




}




