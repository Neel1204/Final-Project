import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city'; 
import { CityService } from '../city.service'; 

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {


  citylists: City[] = [];

  constructor(private cityService: CityService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCity();
  }
  
  private getCity(){
    this.cityService.getCity().subscribe(data => {
      this.citylists = data;
    });
  }

  updateCity(id: number){
    this.router.navigate(['update-city', id]);
  }

  deleteCity(id: number){
    this.cityService.deleteCity(id).subscribe( data => {
      console.log(data);
      this.getCity();
    })
  }
}
