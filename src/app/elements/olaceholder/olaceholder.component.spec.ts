import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaceholderComponent } from './olaceholder.component';

describe('OlaceholderComponent', () => {
  let component: OlaceholderComponent;
  let fixture: ComponentFixture<OlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlaceholderComponent]
    });
    fixture = TestBed.createComponent(OlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
