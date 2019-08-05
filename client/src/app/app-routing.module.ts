import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './body/register/register.component';
import { ReportsComponent } from './body/reports/reports.component';
import { LoginComponent } from './body/login/login.component';
import { HomeComponent } from './body/home/home.component';
import { ListComponent } from './body/list/list.component';
import { FacturaComponent } from './body/factura/factura.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'report', component: ReportsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list', component: ListComponent},
  {path: 'sale', component: FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
