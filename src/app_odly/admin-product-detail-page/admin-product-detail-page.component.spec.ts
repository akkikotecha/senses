import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDetailPageComponent } from './admin-product-detail-page.component';

describe('AdminProductDetailPageComponent', () => {
  let component: AdminProductDetailPageComponent;
  let fixture: ComponentFixture<AdminProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
