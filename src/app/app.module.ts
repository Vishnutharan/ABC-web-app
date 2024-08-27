import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/Componant/navbar/navbar.component';
import { LoginComponent } from '../app/Componant/login/login.component';
import { RegisterComponent } from '../app/Componant/register/register.component';
import { AdminDashboardComponent } from '../app/Componant/admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from '../app/Componant/staff-dashboard/staff-dashboard.component';
import { CustomerDashboardComponent } from '../app/Componant/customer-dashboard/customer-dashboard.component';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../app/Componant/home/home.component';
import { ProductsComponent } from '../app/Componant/product/product.component';
import { BookingComponent } from '../app/Componant/booking/booking.component';
import { ContectComponent } from '../app/Componant/contect/contect.component';
import { AboutComponent } from '../app/Componant/about/about.component';
import { AdminLoginComponent } from '../app/Componant/admin-login/admin-login.component';
import { DashboardStructureComponent } from '../app/Componant/dashboard-structure/dashboard-structure.component';
import { ReservationDataComponent } from '../app/Componant/reservation-data/reservation-data.component';
import { ReservationManagerComponent } from '../app/Componant/reservation-manager-component/reservation-manager-component.component';
import { QueryManagementSystemComponent } from '../app/Componant/query-management-system/query-management-system.component';
import { CustomerQueryComponent } from '../app/Componant/customer-query/customer-query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddtocardComponent } from './Componant/addtocard/addtocard.component';
import { PaymentComponent } from './Componant/payment/payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductManagementComponent } from './Componant/product-management/product-management.component';
import { CustomerManagementComponent } from './Componant/customer-management/customer-management.component';
import { PaymentManagementComponent } from './Componant/payment-management/payment-management.component';
import { OrderManagementComponent } from './Componant/order-management/order-management.component';
import { StaffManagementComponent } from './Componant/staff-management/staff-management.component';


@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    StaffDashboardComponent,
    CustomerDashboardComponent,
    HomeComponent,
    ProductsComponent,
    BookingComponent,
    ContectComponent,
    AboutComponent,
    AdminLoginComponent,
    DashboardStructureComponent,
    ReservationDataComponent,
    ReservationManagerComponent,
    QueryManagementSystemComponent,
    CustomerQueryComponent,
    AddtocardComponent,
    PaymentComponent,
    ProductManagementComponent,
    CustomerManagementComponent,
    PaymentManagementComponent,
    OrderManagementComponent,
    StaffManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
