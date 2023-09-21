import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZestPorudctDetailsComponent } from './zest-porudct-details.component';

describe('ZestPorudctDetailsComponent', () => {
  let component: ZestPorudctDetailsComponent;
  let fixture: ComponentFixture<ZestPorudctDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZestPorudctDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZestPorudctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
