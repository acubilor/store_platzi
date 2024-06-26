import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { MProduct } from '../models/product.model';
import { MCategory } from '../models/category.model';
import { URL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getProducts(category_id ?: string){
    const url  = new  URL('http://api.escuelajs.co/api/v1/products');
    if(category_id){
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<MProduct[]>(url.toString());

  }

  getOneProduct(id : String){
    return this.http.get<MProduct>('http://api.escuelajs.co/api/v1/products/'+ id);
  }

  getCategories(){
    return this.http.get<MCategory[]>('http://api.escuelajs.co/api/v1/categories');
  }

}
