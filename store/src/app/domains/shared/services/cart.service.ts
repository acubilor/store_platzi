import { Injectable, computed, signal } from '@angular/core';
import { MProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<MProduct[]> ([]);
  totalCart = signal(0)

  constructor() { }

  addElementOfCart(pProduct : MProduct){
    const element = this.cart().findIndex(product => product.id == pProduct.id);
    if(element > -1){
      this.cart()[element].cantidad += 1;
    }else{
      pProduct.cantidad = 1;
      this.cart.update( prevState => [...prevState, pProduct]);
    }
    this.totalCart.set(parseInt(this.getTotal().toString().substring(11,this.getTotal().toString().length-1)));
  }

  deleteElementoOfCart(pProduct: MProduct){
    const item = this.cart().findIndex(product => product.id == pProduct.id);
    if(this.cart()[item].cantidad >1){
      this.cart()[item].cantidad -= 1;
    }else{
      const state  = this.cart() ;
      const element  = state.filter(product => product.id !== pProduct.id)
      this.cart.set(element);
    }
    this.totalCart.set(parseInt(this.getTotal().toString().substring(11,this.getTotal().toString().length-1)));

  }

  getTotal(){
    return computed( () =>
        this.cart().reduce((total, product) =>
          total + (product.price * product.cantidad), 0)
    )
  }





}
