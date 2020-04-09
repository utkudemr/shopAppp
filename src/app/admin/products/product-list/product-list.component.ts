import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private repository:ProductRepository) { }

  ngOnInit() {
  }


  getProducts():Product[]{
    return this.repository.getProducts();
  }

  deleteProduct(product:Product)
  {
    this.repository.deleteProduct(product);
  }

}
