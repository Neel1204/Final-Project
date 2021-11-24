import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelComponent } from './create-hotel.component';

describe('CreateHotelComponent', () => {
  let component: CreatehotelComponent;
  let fixture: ComponentFixture<CreatehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
