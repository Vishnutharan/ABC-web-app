import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/Componant/login/login.component';
import { RegisterComponent } from '../app/Componant/register/register.component';
import { AdminDashboardComponent } from '../app/Componant/admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from '../app/Componant/staff-dashboard/staff-dashboard.component';
import { CustomerDashboardComponent } from '../app/Componant/customer-dashboard/customer-dashboard.component';
import { HomeComponent } from '../app/Componant/home/home.component';
import { NavbarComponent } from '../app/Componant/navbar/navbar.component';
import { ProductsComponent } from '../app/Componant/product/product.component';
import { BookingComponent } from '../app/Componant/booking/booking.component';
import { ContectComponent } from '../app/Componant/contect/contect.component';
import { AboutComponent } from '../app/Componant/about/about.component';
import { AdminLoginComponent } from '../app/Componant/admin-login/admin-login.component';
import { DashboardStructureComponent } from '../app/Componant/dashboard-structure/dashboard-structure.component';
import { ReservationDataComponent } from '../app/Componant/reservation-data/reservation-data.component';
import { ReservationManagerComponent } from '../app/Componant/reservation-manager-component/reservation-manager-component.component';
import { CustomerQueryComponent } from '../app/Componant/customer-query/customer-query.component';
import { AddtocardComponent } from './Componant/addtocard/addtocard.component';
import { PaymentComponent } from './Componant/payment/payment.component';
import { ProductManagementComponent } from './Componant/product-management/product-management.component';
import { CustomerManagementComponent } from './Componant/customer-management/customer-management.component';
import { PaymentManagementComponent } from './Componant/payment-management/payment-management.component';
import { OrderManagementComponent } from './Componant/order-management/order-management.component';
import { StaffManagementComponent } from './Componant/staff-management/staff-management.component';
import { AdLoginComponent } from './Componant/ad-login/ad-login.component';
// import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'dashboard', component: DashboardStructureComponent },
  { path: 'reservationdata', component: ReservationDataComponent },
  { path: 'reservationview', component: ReservationManagerComponent },
  { path: 'customerquarry', component: CustomerQueryComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'staffdashboard', component: StaffDashboardComponent },
  { path: 'customerdashboard', component: CustomerDashboardComponent },
  { path: 'addtocard', component: AddtocardComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'payment-management', component: PaymentManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'staff-management', component: StaffManagementComponent },
  { path: 'adLogin', component: AdLoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
