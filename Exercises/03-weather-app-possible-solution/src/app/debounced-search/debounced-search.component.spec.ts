import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncedSearchComponent } from './debounced-search.component';

describe('DebouncedSearchComponent', () => {
  let component: DebouncedSearchComponent;
  let fixture: ComponentFixture<DebouncedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
