import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: number | undefined;
  product: IProduct = {
    id: 0,
    name: 'demo',
    description: 'demo1'
  };
  constructor(private router: Router, private activeRouter: ActivatedRoute, private productService: ProductService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.product = this.productService.getProductById(this.id);
    });
  }
  ngOnInit(): void {
  }

}
