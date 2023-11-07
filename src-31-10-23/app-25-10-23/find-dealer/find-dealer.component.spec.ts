import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDealerComponent } from './find-dealer.component';

describe('FindDealerComponent', () => {
  let component: FindDealerComponent;
  let fixture: ComponentFixture<FindDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
