import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectsComponent } from './our-projects.component';

describe('OurProjectsComponent', () => {
  let component: OurProjectsComponent;
  let fixture: ComponentFixture<OurProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
