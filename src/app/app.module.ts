import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateCityComponent } from './create-city/create-city.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreatehotelComponent } from './create-hotel/create-hotel.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateCityComponent } from './update-city/update-city.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    CreateBookingComponent,
    BookingListComponent,
    BookingDetailComponent,
    UpdateBookingComponent,
    HotelListComponent,
    CustomerListComponent,
    CityListComponent,
    CreateCityComponent,
    CreateCustomerComponent,
    CreatehotelComponent,
    UpdateCityComponent,
    UpdateCustomerComponent,
    UpdateHotelComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
