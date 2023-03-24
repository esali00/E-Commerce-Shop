import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BasketService } from '../basket.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any;

  constructor(private data: DataService, private router: Router) { }

  async ngOnInit() {
    this.data.fetchData().subscribe(data => {
      this.products = data
      // console.log(this.products)
    })
  }

  getDetails(id: any) {
    this.router.navigate(['product-details', id]);
  }

}
