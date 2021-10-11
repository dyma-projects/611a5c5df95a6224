import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public result: number = 0; 

  public increment(): void {
    this.result++;
  }

  public decrement(): void {
    this.result--;
  }

}
