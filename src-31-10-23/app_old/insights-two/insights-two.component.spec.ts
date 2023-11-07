import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsTwoComponent } from './insights-two.component';

describe('InsightsTwoComponent', () => {
  let component: InsightsTwoComponent;
  let fixture: ComponentFixture<InsightsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
