import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LibraryComponent,
    LandingComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
