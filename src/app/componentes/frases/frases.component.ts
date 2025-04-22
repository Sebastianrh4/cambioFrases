import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {

@Input() frase: string = '';

@Output() anterior = new EventEmitter<void>();
@Output() siguiente = new EventEmitter<void>(); 

  
botonAnterior(){
  this.anterior.emit();
}

botonSiguiente(){
  this.siguiente.emit();
}
}


