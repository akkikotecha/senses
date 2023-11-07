import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogNewsComponent } from './admin-blog-news.component';

describe('AdminBlogNewsComponent', () => {
  let component: AdminBlogNewsComponent;
  let fixture: ComponentFixture<AdminBlogNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlogNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
