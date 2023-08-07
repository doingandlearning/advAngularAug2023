import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() currentRating: number = 0;
  @Input() maxRating: number = 10;
  @Output() ratingChange = new EventEmitter<number>();

  updateRating(newRating: number) {
    if (newRating < 1) {
      newRating = 1;
    } else if (newRating > this.maxRating) {
      newRating = this.maxRating;
    }

    this.currentRating = newRating;
    this.ratingChange.emit(this.currentRating);
  }
}
