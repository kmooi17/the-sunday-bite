import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },  // TODO: Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
