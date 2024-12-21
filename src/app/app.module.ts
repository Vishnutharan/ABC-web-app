import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import all Angular Material modules being used
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Import all custom components
import { NavbarComponent } from './Componant/navbar/navbar.component';
import { LoginComponent } from './Componant/login/login.component';
import { RegisterComponent } from './Componant/register/register.component';
import { AdminDashboardComponent } from './Componant/admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from './Componant/staff-dashboard/staff-dashboard.component';
import { CustomerDashboardComponent } from './Componant/customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './Componant/home/home.component';
import { ProductsComponent } from './Componant/product/product.component';
import { BookingComponent } from './Componant/booking/booking.component';
import { ContectComponent } from './Componant/contect/contect.component';
import { AboutComponent } from './Componant/about/about.component';
import { AdminLoginComponent } from './Componant/admin-login/admin-login.component';
import { DashboardStructureComponent } from './Componant/dashboard-structure/dashboard-structure.component';
import { ReservationDataComponent } from './Componant/reservation-data/reservation-data.component';
import { ReservationManagerComponent } from './Componant/reservation-manager-component/reservation-manager-component.component';
import { QueryManagementSystemComponent } from './Componant/query-management-system/query-management-system.component';
import { CustomerQueryComponent } from './Componant/customer-query/customer-query.component';
import { AddtocardComponent } from './Componant/addtocard/addtocard.component';
import { PaymentComponent } from './Componant/payment/payment.component';
import { ProductManagementComponent } from './Componant/product-management/product-management.component';
import { CustomerManagementComponent } from './Componant/customer-management/customer-management.component';
import { PaymentManagementComponent } from './Componant/payment-management/payment-management.component';
import { OrderManagementComponent } from './Componant/order-management/order-management.component';
import { StaffManagementComponent } from './Componant/staff-management/staff-management.component';
import { AdLoginComponent } from './Componant/ad-login/ad-login.component';

// Import all custom services
import { UserService } from './services/user.service';
import { StaffService } from './services/staff.service';
import { BookingService } from './services/booking.service';
import { ProductService } from './services/product.service';
import { UserStoreService } from './services/UserStore.service';

@NgModule({
  // Export Angular Material modules to make them available across the app
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  // Declare all components that belong to this module
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
    AdLoginComponent,
  ],
  // Import necessary modules for this module's components
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
    NgbModule,
  ],
  // Provide services that should be available application-wide
  providers: [
    UserService,
    StaffService,
    BookingService,
    ProductService,
    UserStoreService,
  ],
  // Bootstrap the root component
  bootstrap: [AppComponent],
})
export class AppModule {}
