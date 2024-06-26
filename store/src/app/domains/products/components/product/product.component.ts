import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MProduct } from '../../../shared/models/product.model';
import { FechaCreacionPipe } from '../../../shared/pipes/fecha-creacion.pipe';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports : [FechaCreacionPipe, CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product !: MProduct

  @Output() addToCart = new EventEmitter();

  addtoCartHandler(){
    this.addToCart.emit(this.product);
  }





}
