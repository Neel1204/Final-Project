import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customers: Customer = new Customer ();
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.customerService.createBooking(this.customers).subscribe( data =>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
    console.log(this.customers);
    this.saveCustomer();
  }
}