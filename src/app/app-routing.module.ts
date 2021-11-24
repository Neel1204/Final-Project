import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CreatehotelComponent } from './create-hotel/create-hotel.component'; 
import { CreateCityComponent } from './create-city/create-city.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UpdateCityComponent } from './update-city/update-city.component';

const routes: Routes = [
  {path: 'bookings', component: BookingListComponent},
  {path: '', redirectTo: 'bookings', pathMatch: 'full'},
  {path: 'customerlist', component: CustomerListComponent},
  {path: 'hotellist', component: HotelListComponent},
  {path: 'citylist', component: CityListComponent},
  {path: 'create-booking', component: CreateBookingComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'create-hotel', component: CreatehotelComponent},
  {path: 'create-city', component: CreateCityComponent},
  {path: 'update-booking/:id', component: UpdateBookingComponent},
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'update-hotel/:id', component: UpdateHotelComponent},
  {path: 'update-city/:id', component: UpdateCityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
