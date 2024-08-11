import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'admin' } },
  // { path: 'staff-dashboard', component: StaffDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'staff' } },
  // { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate: [RoleGuardService], data: { expectedRole: 'customer' } },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'nav', component: NavbarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
