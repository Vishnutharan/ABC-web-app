import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { BookingComponent } from './booking/booking.component';
import { ContectComponent } from './contect/contect.component';
import { AboutComponent } from './about/about.component';
// import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContectComponent },
  { path: 'about', component: AboutComponent },




  // { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'admin' } },
  // { path: 'staff-dashboard', component: StaffDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'staff' } },
  // { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'customer' } },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
