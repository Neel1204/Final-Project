import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer'; 
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerlists: Customer[] = [];

  constructor(private customerlistService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {

    this.getCustomers();
  }
  private getCustomers(){
    this.customerlistService.getCustomersList().subscribe(data => {
      this.customerlists = data;
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['update-customer', id]);
  }

  deleteCustomer(id: number){
    this.customerlistService.deleteCustomer(id).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
  }
}
