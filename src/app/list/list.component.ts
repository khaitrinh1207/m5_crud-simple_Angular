import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getAll() {
    this.products = this.productService.getAll();
  }
}
