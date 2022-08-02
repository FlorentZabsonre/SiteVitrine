import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  {path: 'footer', component: FooterComponent},
  { path: 'home', component: HomeComponent},



// ecrire ces 2 path svts à la fin
{ path:'', redirectTo:'home', pathMatch:'full'},
{ path:'**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
