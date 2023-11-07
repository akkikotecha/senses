import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminletstalkComponent } from './adminletstalk.component';

describe('AdminletstalkComponent', () => {
  let component: AdminletstalkComponent;
  let fixture: ComponentFixture<AdminletstalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminletstalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminletstalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
