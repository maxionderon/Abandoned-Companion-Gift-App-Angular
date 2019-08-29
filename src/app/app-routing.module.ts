import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanionsComponent } from './components/companions/companions.component';
import { HomeComponent } from './components/home/home.component';
import { GiftsComponent } from './components/gifts/gifts.component';



const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'companions', component: CompanionsComponent },
  { path: 'companions/:name', component: CompanionsComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'gifts/:type', component: GiftsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
