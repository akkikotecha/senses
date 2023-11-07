import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarerrsJobFormDetailsComponent } from './admin-carerrs-job-form-details.component';

describe('AdminCarerrsJobFormDetailsComponent', () => {
  let component: AdminCarerrsJobFormDetailsComponent;
  let fixture: ComponentFixture<AdminCarerrsJobFormDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarerrsJobFormDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarerrsJobFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
