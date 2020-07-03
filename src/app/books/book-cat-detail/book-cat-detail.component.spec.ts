import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatDetailComponent } from './book-cat-detail.component';

describe('BookCatDetailComponent', () => {
  let component: BookCatDetailComponent;
  let fixture: ComponentFixture<BookCatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
