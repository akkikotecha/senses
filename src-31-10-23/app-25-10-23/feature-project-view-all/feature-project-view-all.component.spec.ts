import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProjectViewAllComponent } from './feature-project-view-all.component';

describe('FeatureProjectViewAllComponent', () => {
  let component: FeatureProjectViewAllComponent;
  let fixture: ComponentFixture<FeatureProjectViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProjectViewAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProjectViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
