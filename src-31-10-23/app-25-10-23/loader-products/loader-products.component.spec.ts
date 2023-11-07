import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderProductsComponent } from './loader-products.component';

describe('LoaderProductsComponent', () => {
  let component: LoaderProductsComponent;
  let fixture: ComponentFixture<LoaderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
