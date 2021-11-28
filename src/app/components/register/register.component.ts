import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Employee'];
  registers: Register = new Register ();
  constructor(private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRegister(){
    this.registerService.createRegister(this.registers).subscribe( data =>{
      console.log(data);
      this.goToRegister();
    },
    error => console.log(error));
  }

  goToRegister(){
    this.router.navigate(['/registers']);
  }

  onSubmit(){
    console.log(this.registers);
    this.saveRegister();
  }
}
