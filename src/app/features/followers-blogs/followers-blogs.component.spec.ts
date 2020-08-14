import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersBlogsComponent } from './followers-blogs.component';

describe('FollowersBlogsComponent', () => {
  let component: FollowersBlogsComponent;
  let fixture: ComponentFixture<FollowersBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
