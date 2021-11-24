import { Component, OnInit } from '@angular/core';
import { City } from '../city'; 
import { CityService } from '../city.service'; 

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  [x: string]: any;

  citylists: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCity();
  }
  private getCity(){
    this.cityService.getCity().subscribe(data => {
      this.citylists = data;
    });
  }
}
