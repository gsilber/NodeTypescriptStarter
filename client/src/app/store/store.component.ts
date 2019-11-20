import { Component, OnInit } from '@angular/core';
import { games } from '../games';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  featuredGame;
  highlightedGames = [];
  listedGames = [];
  allGames = [];
  //games = games;

  constructor() {
    this.allGames = games;
    this.featuredGame = this.allGames[0];
    this.highlightedGames = this.allGames.slice(1, 6);
    this.listedGames = this.allGames.slice(6);
  }

  ngOnInit() {
    //TODO: make this store component call the API to get the games we have
    //currently, all games are loaded from the games.ts file
    //this should probably be a service because both this component and the game component use games.ts
  }

}
