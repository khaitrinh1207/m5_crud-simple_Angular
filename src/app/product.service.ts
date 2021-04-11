import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'sp1',
      description: 'new'
    },
    {
      id: 2,
      name: 'sp2',
      description: 'new'
    },
    {
      id: 3,
      name: 'sp3',
      description: 'new'
    }
  ];

  getAll(): IProduct[] {
    return this.products;
  }
  getProductById(id: number): IProduct{
    return this.products[id - 1];
  }
  // tslint:disable-next-line:typedef
  addNew(product: IProduct){
    product.id = this.products.length + 1;
    this.products.push(product);
  }
  constructor() { }
}
