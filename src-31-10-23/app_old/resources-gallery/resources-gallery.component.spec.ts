import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesGalleryComponent } from './resources-gallery.component';

describe('ResourcesGalleryComponent', () => {
  let component: ResourcesGalleryComponent;
  let fixture: ComponentFixture<ResourcesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
