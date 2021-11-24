import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  citys: City = new City ();
  constructor(private cityService: CityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCity(){
    this.cityService.createBooking(this.citys).subscribe( data =>{
      console.log(data);
      this.goToCityList();
    },
    error => console.log(error));
  }

  goToCityList(){
    this.router.navigate(['/citys']);
  }
  onSubmit(){
    console.log(this.citys);
    this.saveCity();
  }
}
