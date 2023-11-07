import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAndNewsShowDetailsComponent } from './blog-and-news-show-details.component';

describe('BlogAndNewsShowDetailsComponent', () => {
  let component: BlogAndNewsShowDetailsComponent;
  let fixture: ComponentFixture<BlogAndNewsShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAndNewsShowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAndNewsShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
