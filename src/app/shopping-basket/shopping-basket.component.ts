import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

  constructor(public basket: BasketService) { }

  ngOnInit(): void {
    
  }

  increaseAmount(i: any) {
    this.basket.amount[i] += 1
  }

  decreaseAmount(i: any) {
    this.basket.amount[i] -= 1
  }


}
