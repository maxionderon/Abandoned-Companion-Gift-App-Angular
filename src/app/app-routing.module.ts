import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanionsComponent } from './components/companions/companions.component';
import { CompanionComponent } from './components/companion/companion.component';


const routes: Routes = [

  { path: '', component: CompanionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
