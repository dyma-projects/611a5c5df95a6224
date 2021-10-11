import { Component, ElementRef, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {
  public valeur: string;

  @ViewChild('text', { static: true }) textRef: ElementRef<HTMLInputElement>;

  constructor() { }

  public changeValue(): void {
    console.log('changes');

    this.valeur = this.textRef.nativeElement.value;
  }

}
