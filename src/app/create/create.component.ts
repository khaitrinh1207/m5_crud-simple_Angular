import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: IProduct ={
    id: 0,
    name: '',
    description: ''
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addNew(){
    this.productService.addNew(this.product);
    this.router.navigate(['/']);

  }

}
