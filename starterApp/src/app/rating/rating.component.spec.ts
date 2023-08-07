import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { By } from '@angular/platform-browser';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
    });
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct rating when updated', () => {
    // Arrange
    // Act
    spyOn(component.ratingChange, 'emit');
    component.updateRating(5);

    // Assert
    expect(component.ratingChange.emit).toHaveBeenCalledTimes(1);
    expect(component.ratingChange.emit).toHaveBeenCalledWith(5);
  });

  it('should not go below 1', () => {});

  it('should not go above the max', () => {});

  it('should increase when increase button is clicked', () => {
    const button = fixture.debugElement.query(By.css('#addButton'));
    component.currentRating = 1;

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.currentRating).toBe(2);
  });

  it('should decrease when the decrease button is clicked', () => {});
});
