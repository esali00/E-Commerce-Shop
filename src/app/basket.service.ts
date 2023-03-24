import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products: any[] = []
  amount: any[] = []
  shopping_cart: any[] = []

  constructor(private data: DataService) { 
    this.data.fetchData().subscribe(data => {
      this.products = data
    })
  }

  addToBasket(id: any) {
    if (this.shopping_cart.indexOf(this.products[id - 1]) === -1 ) {
      this.shopping_cart.push(this.products[id - 1])
      this.amount.push(1)
    } else {
      this.amount[this.shopping_cart.indexOf(this.products[id - 1])] += 1
    }
    console.log(this.shopping_cart)
    console.log(this.amount)
  }
}
