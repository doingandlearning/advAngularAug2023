import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchComponent } from './toggle-switch.component';
import { By } from '@angular/platform-browser';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleSwitchComponent],
    });
    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the state should start at false', () => {
    expect(component.switchState).toBe(false);
  });

  it('the state should change to true', () => {
    const button = fixture.debugElement.query(By.css('button'));
    component.switchState = false;

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.switchState).toBe(
      true,
      'Clicking the button should have changed false to true'
    );
  });

  it('the event emitter should emit with the correct value', () => {
    // Arrange
    component.switchState = false;
    spyOn(component.stateChanged, 'emit');

    // Act
    component.toggleSwitch();

    // Assert
    expect(component.stateChanged.emit).toHaveBeenCalledWith(true);
    expect(component.stateChanged.emit).toHaveBeenCalledTimes(1);
    expect(component.toggleCount).toBe(1);

    component.toggleSwitch();
    component.toggleSwitch();
    component.toggleSwitch();

    expect(component.toggleCount).toBe(4);
  });
});
