import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDocumentComponent } from './resources-document.component';

describe('ResourcesDocumentComponent', () => {
  let component: ResourcesDocumentComponent;
  let fixture: ComponentFixture<ResourcesDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
