import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryPageComponent } from './admin-category-page.component';

describe('AdminCategoryPageComponent', () => {
  let component: AdminCategoryPageComponent;
  let fixture: ComponentFixture<AdminCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
