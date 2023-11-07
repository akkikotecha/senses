import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofuserComponent } from './termsofuser.component';

describe('TermsofuserComponent', () => {
  let component: TermsofuserComponent;
  let fixture: ComponentFixture<TermsofuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsofuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
