import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofboxComponent } from './outofbox.component';

describe('OutofboxComponent', () => {
  let component: OutofboxComponent;
  let fixture: ComponentFixture<OutofboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutofboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutofboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
