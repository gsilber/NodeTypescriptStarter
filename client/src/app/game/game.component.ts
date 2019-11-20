import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from '../games';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.game = games[+params.get('id')];
    });
  }

  addToCart(game){
    window.alert('Your game has been added to your cart!');
    this.cartService.addToCart(game);
  }

}
