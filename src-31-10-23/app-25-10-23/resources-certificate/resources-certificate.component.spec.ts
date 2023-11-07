import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCertificateComponent } from './resources-certificate.component';

describe('ResourcesCertificateComponent', () => {
  let component: ResourcesCertificateComponent;
  let fixture: ComponentFixture<ResourcesCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
