import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerNewComponent } from './career-new.component';

describe('CareerNewComponent', () => {
  let component: CareerNewComponent;
  let fixture: ComponentFixture<CareerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
