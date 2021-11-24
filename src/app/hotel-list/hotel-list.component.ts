import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel'; 
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  [x: string]: any;

  hotellists: Hotel[] = [];
  
  constructor(private hotellistService: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
  }
  private getHotels(){
    this.hotellistService.getHotelsList().subscribe(data => {
      this.hotellists = data;
    });
  }

}
