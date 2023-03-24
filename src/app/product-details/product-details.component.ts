import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../basket.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: any
  product: any

  constructor(private data: DataService, public basket: BasketService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.data.fetchData().subscribe(data => {
      this.product = data[this.id - 1]
      // console.log(this.product)
    })
  }



}
