import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoucesNewComponent } from './resouces-new.component';

describe('ResoucesNewComponent', () => {
  let component: ResoucesNewComponent;
  let fixture: ComponentFixture<ResoucesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResoucesNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResoucesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
