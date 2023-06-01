import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDetailShowComponent } from './admin-product-detail-show.component';

describe('AdminProductDetailShowComponent', () => {
  let component: AdminProductDetailShowComponent;
  let fixture: ComponentFixture<AdminProductDetailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductDetailShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductDetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
