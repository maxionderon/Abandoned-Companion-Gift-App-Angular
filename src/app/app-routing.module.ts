import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanionsComponent } from './components/companions/companions.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [

  
  { path: '', component: HomeComponent },
  { path: 'companions', component: CompanionsComponent },
  { path: 'companions/:name', component: CompanionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
