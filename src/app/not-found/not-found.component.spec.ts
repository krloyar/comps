import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounfComponent } from './not-found.component';

describe('NotFounfComponent', () => {
  let component: NotFounfComponent;
  let fixture: ComponentFixture<NotFounfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFounfComponent]
    });
    fixture = TestBed.createComponent(NotFounfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
