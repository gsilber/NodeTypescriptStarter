import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'store', component: StoreComponent},
  {path: 'library', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
