import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetilsComponent } from './blog-detils.component';

describe('BlogDetilsComponent', () => {
  let component: BlogDetilsComponent;
  let fixture: ComponentFixture<BlogDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
