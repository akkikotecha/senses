import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMaterialComponent } from './resources-material.component';

describe('ResourcesMaterialComponent', () => {
  let component: ResourcesMaterialComponent;
  let fixture: ComponentFixture<ResourcesMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
