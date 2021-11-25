import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel'; 
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotellists: Hotel[] = [];
  
  constructor(private hotellistService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotels();
  }
  private getHotels(){
    this.hotellistService.getHotelsList().subscribe(data => {
      this.hotellists = data;
    });
  }

  updateHotel(id: number){
    this.router.navigate(['update-city', id]);
  }

  deleteHotel(id: number){
    this.hotellistService.deleteHotel(id).subscribe( data => {
      console.log(data);
      this.getHotels();
    })
  }

}
