import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingInputComponent } from './debouncing-input.component';

describe('DebouncingInputComponent', () => {
  let component: DebouncingInputComponent;
  let fixture: ComponentFixture<DebouncingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebouncingInputComponent]
    });
    fixture = TestBed.createComponent(DebouncingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
