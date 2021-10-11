import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent {
  @Input() compteur?: number;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  public incrementCompteur(): void {
    this.increment.emit();
  }

  public decrementCompteur(): void {
    this.decrement.emit();
  }
}
