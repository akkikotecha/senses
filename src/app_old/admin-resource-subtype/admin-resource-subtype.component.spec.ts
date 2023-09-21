import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResourceSubtypeComponent } from './admin-resource-subtype.component';

describe('AdminResourceSubtypeComponent', () => {
  let component: AdminResourceSubtypeComponent;
  let fixture: ComponentFixture<AdminResourceSubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResourceSubtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResourceSubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
