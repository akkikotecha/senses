import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductShowDetailComponent } from './feature-product-show-detail.component';

describe('FeatureProductShowDetailComponent', () => {
  let component: FeatureProductShowDetailComponent;
  let fixture: ComponentFixture<FeatureProductShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProductShowDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProductShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
